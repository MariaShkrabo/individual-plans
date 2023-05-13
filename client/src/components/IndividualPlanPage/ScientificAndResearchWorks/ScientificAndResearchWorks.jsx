import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { buttonThemes, colors } from "../../../shared/enums";
import classes from "./scientific_and_research_work.module.scss";
import ScientificAndResearchStudentsWorks from "./ScientificAndResearchStudentsWorks/ScientificAndResearchStudentsWorks";
import ScientificAndResearchWorkStages from "./ScientificAndResearchWorkStages/ScientificAndResearchWorkStages";
import CustomButton from "../../../shared/components/Button/Button";
import { getMe } from "../../../redux/Selectors";
import Input from "../../../shared/components/Input/Input";

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

  return (
    <div className={classes["scientific_and_research_work"]}>
      {isStudentsWorksShown && (
        <h1 className={classes["scientific_and_research_work__title"]}>
          студентов
        </h1>
      )}
      <form>
        <div className={classes["scientific_and_research_work__control"]}>
          <Input
            name="scientific_and_research_theme_name"
            placeholder="Наименование научно-исследовательской темы (задания)"
            control={control}
          />
        </div>

        {isStudentsWorksShown ? (
          <ScientificAndResearchStudentsWorks />
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
        className={classes["scientific_and_research_work__button"]}
        color={colors.secondary}
        theme={buttonThemes.medium}
        type="button"
        onClick={() => setIsStudentsWorksShown(!isStudentsWorksShown)}
      >
        {isStudentsWorksShown
          ? `Научно-исследовательская работа преподавателей`
          : `Научно-исследовательская работа студентов`}
      </CustomButton>
    </div>
  );
};

export default ScientificAndResearchWorks;
