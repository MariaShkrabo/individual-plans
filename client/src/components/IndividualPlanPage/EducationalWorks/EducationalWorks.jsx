import { useState } from "react";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";
import classes from "./educational-work.module.scss";
import EducationalWorksDisciplines from "./EducationalWorksDisciplines/EducationalWorksDisciplines";

const EducationalWorks = () => {
  const [isDisciplinesShown, setIsDisciplinesShown] = useState(false);
  const [semester, setSemester] = useState();

  const showDisciplines = () => {
    switch (semester) {
      case 1:
        return (
          <EducationalWorksDisciplines
            name="first_semester"
            title="за осенний семестр"
            semester={1}
            setIsDisciplinesShown={setIsDisciplinesShown}
          />
        );
      case 2:
        return (
          <EducationalWorksDisciplines
            name="second_semester"
            title="за весенний семестр"
            semester={2}
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
