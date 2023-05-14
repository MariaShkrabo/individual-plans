import { useFieldArray } from "react-hook-form";
import classes from "./../educational-work.module.scss";
import CustomButton from "../../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../../shared/enums";
import Input from "../../../../shared/components/Input/Input";

const EducationalWorksDisciplines = ({
  control,
  name,
  title,
  setIsDisciplinesShown,
}) => {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: name,
  });

  const addField = () => {
    append({
      discipline: "",
    });
  };

  return (
    <form>
      <button
        className={classes["educational-work__button_back"]}
        onClick={() => setIsDisciplinesShown(false)}
      >
        ← Назад
      </button>
      <h1 className={classes["educational-work__title"]}>{title}</h1>
      <ul className={classes["educational-work__list"]}>
        {fields.map((item, index) => {
          return (
            <li key={item.id} className={classes["educational-work__item"]}>
              <div className={classes["educational-work__control"]}>
                <Input
                  name={`${name}.${index}.discipline`}
                  placeholder="Наименование учебной дисциплины"
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
        className={classes["educational-work__button_add"]}
        color={colors.success}
        theme={buttonThemes.form}
        type="button"
        onClick={addField}
      >
        Добавить
      </CustomButton>
      <CustomButton color={colors.form} theme={buttonThemes.form} type="submit">
        Сохранить изменения
      </CustomButton>
    </form>
  );
};

export default EducationalWorksDisciplines;
