import { useState } from "react";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";
import classes from "./educational-work.module.scss";
import EducationalWorksDisciplines from "./EducationalWorksDisciplines/EducationalWorksDisciplines";
import { useForm } from "react-hook-form";

const EducationalWorks = () => {
  const [isDisciplinesShown, setIsDisciplinesShown] = useState(false);
  const [semester, setSemester] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: "onTouched" });

  const showDisciplines = () => {
    switch (semester) {
      case 1:
        return (
          <EducationalWorksDisciplines
            control={control}
            name="educational_works_first_semester"
            title="за осенний семестр"
            setIsDisciplinesShown={setIsDisciplinesShown}
          />
        );
      case 2:
        return (
          <EducationalWorksDisciplines
            control={control}
            name="educational_works_second_semester"
            title="за весенний семестр"
            setIsDisciplinesShown={setIsDisciplinesShown}
          />
        );
      default:
        return <div>Ошибка!</div>;
    }
  };

  return (
    <div className={classes["educational-work"]}>
      {isDisciplinesShown ? (
        showDisciplines()
      ) : (
        <>
          <div className={classes["educational-work__control"]}>
            <CustomButton
              color={colors.form}
              theme={buttonThemes.form}
              type="button"
              onClick={() => {
                setIsDisciplinesShown(true);
                setSemester(1);
              }}
            >
              Осенний семестр
            </CustomButton>
          </div>
          <div className={classes["educational-work__control"]}>
            <CustomButton
              color={colors.form}
              theme={buttonThemes.form}
              type="button"
              onClick={() => {
                setIsDisciplinesShown(true);
                setSemester(2);
              }}
            >
              Весенний семестр
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationalWorks;
