import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { SERVER_PORT } from "../constants";
import { useCallback, useEffect, useState } from "react";
import request from "../api/request";
import { GET_INDIVIDUAL_PLAN_COMMON_DATA } from "../api/requests";
import { useSelector } from "react-redux";
import { getMe } from "../../redux/Selectors";
import { formatDate } from "../functions/formatDate";
import { setFields } from "../functions/setFields";

export const useGenerateDocument = () => {
  const me = useSelector(getMe);

  const [planData, setPlanData] = useState();

  const initIndividualPlanData = useCallback(async () => {
    if (me) {
      const planData = await request(GET_INDIVIDUAL_PLAN_COMMON_DATA(me.id));
      const updated_employment_date = formatDate(
        planData.employment_date,
        "d MMMM yyyy"
      );
      const updated_year_start = formatDate(planData.year_start, "yyyy");
      const updated_year_end = formatDate(planData.year_end, "yyyy");
      const updated_plan_approval_date = formatDate(
        planData.plan_approval_date,
        "d MMMM yyyy"
      );

      const head_of_department = `${planData.head_surname} ${planData.head_name[0]}.${planData.head_father_name[0]}`;

      setPlanData(
        setFields(
          {
            head_of_department,
            updated_employment_date,
            updated_year_start,
            updated_year_end,
            updated_plan_approval_date,
            ...planData,
          },
          ""
        )
      );
    }
  }, [me]);

  useEffect(() => {
    initIndividualPlanData();
  }, [initIndividualPlanData]);

  const loadFile = (url, callback) => {
    PizZipUtils.getBinaryContent(url, callback);
  };

  const generateDocument = () => {
    loadFile(
      `http://localhost:${SERVER_PORT}/documents/template.docx`,
      function (error, content) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        doc.setData(planData);
        try {
          doc.render();
        } catch (error) {
          function replaceErrors(key, value) {
            if (value instanceof Error) {
              return Object.getOwnPropertyNames(value).reduce(function (
                error,
                key
              ) {
                error[key] = value[key];
                return error;
              },
              {});
            }
            return value;
          }
          console.log(JSON.stringify({ error: error }, replaceErrors));

          if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors
              .map(function (error) {
                return error.properties.explanation;
              })
              .join("\n");
            console.log("errorMessages", errorMessages);
          }
          throw error;
        }
        var out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        saveAs(
          out,
          `Индивидуальный план (${me.surname} ${me.name[0]}.${me.father_name[0]}.).docx`
        );
      }
    );
  };

  return {
    generateDocument,
  };
};
