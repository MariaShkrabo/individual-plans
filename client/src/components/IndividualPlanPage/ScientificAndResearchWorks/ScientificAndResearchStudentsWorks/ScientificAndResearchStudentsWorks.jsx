import { useFieldArray } from "react-hook-form";
import classes from "../scientific_and_research_work.module.scss";
import Input from "../../../../shared/components/Input/Input";
import DateField from "../../../../shared/components/DateField/DateField";
import CustomButton from "../../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../../shared/enums";

const ScientificAndResearchStudentsWorks = ({ control }) => {
  const name = "scientific_and_research_students_works";

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: name,
  });

  const addField = () => {
    append({
      name: "",
      hours_number: "",
      date_start: "",
      date_end: "",
      reporting_form: "",
      head_of_department_mark: "",
      note: "",
    });
  };

  return (
    <>
      <ul className={classes["scientific-and-research-work__list"]}>
        {fields.map((item, index) => {
          return (
            <li
              key={item.id}
              className={classes["scientific-and-research-work__item"]}
            >
              <div className={classes["scientific-and-research-work__control"]}>
                <Input
                  name={`${name}.${index}.name`}
                  placeholder="Наименование работ"
                  control={control}
                />
              </div>
              <div
                className={
                  classes["scientific-and-research-work__control_work-type"]
                }
              >
                <Input
                  name={`${name}.${index}.hours_number`}
                  placeholder="Число часов"
                  control={control}
                  type="number"
                  changingValue={0}
                />
              </div>
              <div className={classes["scientific-and-research-work__control"]}>
                <p
                  className={
                    classes["scientific-and-research-work__control-title"]
                  }
                >
                  Сроки выполнения
                </p>
                <div
                  className={
                    classes["scientific-and-research-work__control-inputs"]
                  }
                >
                  <DateField
                    name={`${name}.${index}.date_start`}
                    placeholder="Начало"
                    control={control}
                  />
                  <span>-</span>
                  <DateField
                    name={`${name}.${index}.date_end`}
                    placeholder="Конец"
                    control={control}
                  />
                </div>
              </div>
              <div className={classes["scientific-and-research-work__control"]}>
                <Input
                  name={`${name}.${index}.reporting_form`}
                  placeholder="Форма отчётности"
                  control={control}
                />
              </div>
              <div className={classes["scientific-and-research-work__control"]}>
                <Input
                  name={`${name}.${index}.head_of_department_mark`}
                  placeholder="Отметки заведующего кафедрой о выполнении"
                  control={control}
                />
              </div>
              <div className={classes["scientific-and-research-work__control"]}>
                <Input
                  name={`${name}.${index}.note`}
                  placeholder="Примечание"
                  control={control}
                />
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
        })}
      </ul>
      <CustomButton
        className={classes["scientific-and-research-work__button_add"]}
        color={colors.success}
        theme={buttonThemes.form}
        type="button"
        onClick={addField}
      >
        Добавить
      </CustomButton>
    </>
  );
};

export default ScientificAndResearchStudentsWorks;
