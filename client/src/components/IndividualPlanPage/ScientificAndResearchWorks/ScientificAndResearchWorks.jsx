import { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { buttonThemes, colors } from "../../../shared/enums";
import classes from "./scientific_and_research_work.module.scss";
import ScientificAndResearchStudentsWorks from "./ScientificAndResearchStudentsWorks/ScientificAndResearchStudentsWorks";
import ScientificAndResearchWorkStages from "./ScientificAndResearchWorkStages/ScientificAndResearchWorkStages";
import CustomButton from "../../../shared/components/Button/Button";
import { getMe } from "../../../redux/Selectors";
import Input from "../../../shared/components/Input/Input";
import request from "../../../shared/api/request";
import {
  GET_SCIENTIFIC_THEME,
  GET_SCIENTIFIC_WORK_STAGES,
  GET_STUDENTS_SCIENTIFIC_WORK,
  UPDATE_SCIENTIFIC_AND_RESEARCH_WORK_DATA,
} from "../../../shared/api/requests";
import { setFields } from "../../../shared/functions/setFields";
import { showSuccess } from "../../../redux/Actions";

const ScientificAndResearchWorks = () => {
  const [isStudentsWorksShown, setIsStudentsWorksShown] = useState(false);
  const me = useSelector(getMe);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: "onTouched" });

  const formatDate = (data) => {
    data.map((field) => {
      field.date_start = field.date_start ? new Date(field.date_start) : null;
      field.date_end = field.date_end ? new Date(field.date_end) : null;
    });

    return data;
  };

  const initForm = useCallback(async () => {
    if (me) {
      const { scientific_and_research_theme_name } = await request(
        GET_SCIENTIFIC_THEME(me.id)
      );
      const stages = await request(GET_SCIENTIFIC_WORK_STAGES(me.id));
      const students = await request(GET_STUDENTS_SCIENTIFIC_WORK(me.id));

      setValue(
        "scientific_and_research_theme_name",
        scientific_and_research_theme_name
      );
      setValue("scientific_and_research_work_stages", [...formatDate(stages)]);
      setValue("scientific_and_research_students_works", [
        ...formatDate(students),
      ]);
    }
  }, [me, setValue]);

  useEffect(() => {
    initForm();
  }, [initForm]);

  const save = async (formData) => {
    const data = { ...formData };
    await request(
      UPDATE_SCIENTIFIC_AND_RESEARCH_WORK_DATA(me.id, setFields(data, null))
    );
    dispatch(showSuccess("Изменения сохранены!"));
  };

  return (
    <div className={classes["scientific-and-research-work"]}>
      {isStudentsWorksShown && (
        <h1 className={classes["scientific-and-research-work__title"]}>
          студентов
        </h1>
      )}
      <form onSubmit={handleSubmit(save)}>
        <div className={classes["scientific-and-research-work__control"]}>
          <Input
            name="scientific_and_research_theme_name"
            placeholder="Наименование научно-исследовательской темы (задания)"
            control={control}
          />
        </div>

        {isStudentsWorksShown ? (
          <ScientificAndResearchStudentsWorks control={control} />
        ) : (
          <ScientificAndResearchWorkStages control={control} />
        )}
        <CustomButton
          color={colors.form}
          theme={buttonThemes.form}
          type="submit"
        >
          Сохранить изменения
        </CustomButton>
      </form>
      <CustomButton
        className={classes["scientific-and-research-work__button"]}
        color={colors.secondary}
        theme={buttonThemes.medium}
        type="button"
        onClick={() => setIsStudentsWorksShown(!isStudentsWorksShown)}
      >
        {isStudentsWorksShown
          ? `Научно-исследовательская работа преподавателя`
          : `Научно-исследовательская работа студентов`}
      </CustomButton>
    </div>
  );
};

export default ScientificAndResearchWorks;
