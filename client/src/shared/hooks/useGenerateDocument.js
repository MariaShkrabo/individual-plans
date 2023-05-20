import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { SERVER_PORT } from "../constants";
import { useCallback, useEffect, useState } from "react";
import request from "../api/request";
import {
  GET_EDUCATIONAL_AND_METHODICAL_DATA,
  GET_EDUCATIONAL_WORK,
  GET_EDUCATIONAL_WORK_SCHEDULED_HOURS,
  GET_INDIVIDUAL_PLAN_COMMON_DATA,
  GET_INFORMATION_AND_EDUCATIONAL_DATA,
  GET_ORGANIZATIONAL_AND_METHODICAL_DATA,
  GET_SCIENTIFIC_THEME,
  GET_SCIENTIFIC_WORK_STAGES,
  GET_STUDENTS_SCIENTIFIC_WORK,
  GET_TOTAL_EDUCATIONAL_WORK_SCHEDULED_HOURS,
} from "../api/requests";
import { useSelector } from "react-redux";
import { getMe } from "../../redux/Selectors";
import { formatDate } from "../functions/formatDate";
import { setFields } from "../functions/setFields";

export const useGenerateDocument = () => {
  const me = useSelector(getMe);

  const [planData, setPlanData] = useState({});

  const initIndividualPlanData = useCallback(async () => {
    if (me) {
      const individualPlanData = await request(
        GET_INDIVIDUAL_PLAN_COMMON_DATA(me.id)
      );

      const updated_employment_date = formatDate(
        individualPlanData.employment_date,
        "d MMMM yyyy"
      );
      const updated_year_start = formatDate(
        individualPlanData.year_start,
        "yyyy"
      );
      const updated_year_end = formatDate(individualPlanData.year_end, "yyyy");
      const updated_plan_approval_date = formatDate(
        individualPlanData.plan_approval_date,
        "d MMMM yyyy"
      );

      const head_of_department = `${individualPlanData.head_surname} ${individualPlanData.head_name[0]}.${individualPlanData.head_father_name[0]}`;

      setPlanData(
        Object.assign(
          planData,
          setFields(
            {
              head_of_department,
              updated_employment_date,
              updated_year_start,
              updated_year_end,
              updated_plan_approval_date,
              ...individualPlanData,
            },
            ""
          )
        )
      );
    }
  }, [me, planData]);

  const setGeneralSectionsData = useCallback(
    (responseData, propertyName) => {
      responseData.map((field, index) => {
        field.id = index + 1;
        field.date_start = field.date_start
          ? formatDate(field.date_start, "dd.MM.yy")
          : "";
        field.date_end = field.date_end
          ? formatDate(field.date_end, "dd.MM.yy")
          : "";
      });

      setPlanData(
        Object.assign(planData, {
          [propertyName]: setFields(responseData, ""),
        })
      );
    },
    [planData]
  );

  const initEducationalData = useCallback(async () => {
    if (me) {
      const first_semester = await request(GET_EDUCATIONAL_WORK(me.id, 1));
      const second_semester = await request(GET_EDUCATIONAL_WORK(me.id, 2));

      const first_semester_scheduled_hours = await request(
        GET_EDUCATIONAL_WORK_SCHEDULED_HOURS(me.id, 1)
      );
      const second_semester_scheduled_hours = await request(
        GET_EDUCATIONAL_WORK_SCHEDULED_HOURS(me.id, 2)
      );
      const total_scheduled_hours = await request(
        GET_TOTAL_EDUCATIONAL_WORK_SCHEDULED_HOURS(me.id)
      );

      setGeneralSectionsData(first_semester, "first_semester");
      setGeneralSectionsData(second_semester, "second_semester");

      setGeneralSectionsData(first_semester_scheduled_hours, "fs_sch_h");
      setGeneralSectionsData(second_semester_scheduled_hours, "ss_sch_h");

      setGeneralSectionsData(total_scheduled_hours, "t_sch_h");
    }
  }, [me, setGeneralSectionsData]);

  const initEducationalAndMethodicalData = useCallback(async () => {
    if (me) {
      const educationalAndMethodicalData = await request(
        GET_EDUCATIONAL_AND_METHODICAL_DATA(me.id)
      );

      setGeneralSectionsData(
        educationalAndMethodicalData,
        "educational_and_methodical_data"
      );
    }
  }, [me, setGeneralSectionsData]);

  const initOrganizationalAndMethodicalData = useCallback(async () => {
    if (me) {
      const organizationalAndMethodicalData = await request(
        GET_ORGANIZATIONAL_AND_METHODICAL_DATA(me.id)
      );

      setGeneralSectionsData(
        organizationalAndMethodicalData,
        "organizational_and_methodical_data"
      );
    }
  }, [me, setGeneralSectionsData]);

  const initInformationAndEducationalData = useCallback(async () => {
    if (me) {
      const informationAndEducationalData = await request(
        GET_INFORMATION_AND_EDUCATIONAL_DATA(me.id)
      );

      setGeneralSectionsData(
        informationAndEducationalData,
        "information_and_educational_data"
      );
    }
  }, [me, setGeneralSectionsData]);

  const initScientificData = useCallback(async () => {
    if (me) {
      const { scientific_and_research_theme_name } = await request(
        GET_SCIENTIFIC_THEME(me.id)
      );
      setPlanData(
        Object.assign(
          planData,
          setFields({ scientific_and_research_theme_name }, "")
        )
      );

      const stages = await request(GET_SCIENTIFIC_WORK_STAGES(me.id));
      setGeneralSectionsData(stages, "scientific_and_research_work_stages");

      const students = await request(GET_STUDENTS_SCIENTIFIC_WORK(me.id));
      setGeneralSectionsData(
        students,
        "scientific_and_research_students_works"
      );
    }
  }, [me, planData, setGeneralSectionsData]);

  useEffect(() => {
    console.log(planData);
  }, [planData]);

  useEffect(() => {
    initEducationalData();
  }, [initEducationalData]);

  useEffect(() => {
    initScientificData();
  }, [initScientificData]);

  useEffect(() => {
    initIndividualPlanData();
  }, [initIndividualPlanData]);

  useEffect(() => {
    initEducationalAndMethodicalData();
  }, [initEducationalAndMethodicalData]);

  useEffect(() => {
    initOrganizationalAndMethodicalData();
  }, [initOrganizationalAndMethodicalData]);

  useEffect(() => {
    initInformationAndEducationalData();
  }, [initInformationAndEducationalData]);

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
