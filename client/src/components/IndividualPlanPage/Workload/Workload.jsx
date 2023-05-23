import { useState } from "react";
import { WORKLOADS_MONTHS } from "../../../shared/constants";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";
import classes from "./workload.module.scss";
import WorkloadForm from "./WorkloadForm/WorkloadForm";

const Workload = () => {
  const [isMonthListShown, setIsMonthListShown] = useState(true);
  const [isDaysListShown, setIsDaysListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);

  const generateDaysList = () => {
    let daysList = [];

    for (let i = 1; i <= month.daysQuantity; i++) {
      daysList.push(i);
    }

    return daysList;
  };

  const setContent = () => {
    switch (true) {
      case isMonthListShown:
        return (
          <div className={classes["workload-months"]}>
            {WORKLOADS_MONTHS.map((month) => (
              <CustomButton
                className={classes["workload-months__item"]}
                key={month.number}
                color={colors.form}
                theme={buttonThemes.medium}
                type="button"
                onClick={() => {
                  setIsDaysListShown(true);
                  setIsMonthListShown(false);
                  setMonth(month);
                }}
              >
                {month.name}
              </CustomButton>
            ))}
          </div>
        );
      case isDaysListShown && !isMonthListShown:
        return (
          <div className={classes["workload-days"]}>
            <button
              className={classes.workload__button_back}
              onClick={() => {
                setIsDaysListShown(false);
                setIsMonthListShown(true);
                setMonth(null);
              }}
            >
              ← Назад
            </button>
            <p className={classes["workload-days__title"]}>{month.name}</p>
            <div className={classes["workload-days"]}>
              {generateDaysList().map((day) => (
                <CustomButton
                  className={classes["workload-days__item"]}
                  key={day}
                  color={colors.secondary}
                  theme={buttonThemes.small}
                  type="button"
                  onClick={() => {
                    setDay(day);
                    setIsFormShown(true);
                    setIsDaysListShown(false);
                  }}
                >
                  {day}
                </CustomButton>
              ))}
            </div>
          </div>
        );
      case isFormShown:
        return (
          <div className={classes["workload-form"]}>
            <p
              className={classes["workload-form__title"]}
            >{`${day} ${month.caseName}`}</p>
            <button
              className={classes.workload__button_back}
              onClick={() => {
                setIsFormShown(false);
                setIsDaysListShown(true);
                setDay(null);
              }}
            >
              ← Назад
            </button>
            <WorkloadForm month={month} day={day} />
          </div>
        );
      default:
        return <div>Нет данных!</div>;
    }
  };

  return <section className={classes.workload}>{setContent()}</section>;
};

export default Workload;
