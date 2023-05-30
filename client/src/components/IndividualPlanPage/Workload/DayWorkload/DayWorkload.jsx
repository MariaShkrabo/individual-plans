import CustomButton from "../../../../shared/components/Button/Button";
import Input from "../../../../shared/components/Input/Input";
import { WORK_TYPES } from "../../../../shared/constants";
import { buttonThemes, colors } from "../../../../shared/enums";
import { disciplineValidation } from "../ValidationRules";
import classes from "./day-workload.module.scss";

const DayWorkload = ({ control, remove, index, name, errors }) => {
  return (
    <li className={classes["day-workload"]}>
      <div className={classes["day-workload__control"]}>
        <Input
          name={`${name}.${index}.discipline`}
          placeholder="Наименование учебной дисциплины"
          control={control}
          error={errors?.name?.[index].discipline}
          rules={disciplineValidation}
        />
      </div>
      <p className={classes["day-workload__text"]}>Число часов</p>
      <div className={classes["day-workload__hours-section"]}>
        {WORK_TYPES.map(
          (type) =>
            type.name !== "total_hours" && (
              <div
                key={type.id}
                className={classes["day-workload__hours-section-item"]}
              >
                <Input
                  name={`${name}.${index}.${type.name}`}
                  placeholder={`${type.placeholder}`}
                  type="number"
                  control={control}
                />
              </div>
            )
        )}
      </div>
      <CustomButton
        color={colors.error}
        theme={buttonThemes.form}
        type="button"
        onClick={() => remove(index)}
      >
        Удалить
      </CustomButton>
    </li>
  );
};

export default DayWorkload;
