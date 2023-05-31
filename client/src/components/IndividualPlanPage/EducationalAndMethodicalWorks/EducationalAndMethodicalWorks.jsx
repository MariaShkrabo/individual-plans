import { useFieldArray, useForm } from "react-hook-form";
import Input from "../../../shared/components/Input/Input";
import classes from "./educational-and-methodical-work.module.scss";
import DateField from "../../../shared/components/DateField/DateField";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../redux/Selectors";
import { useCallback, useEffect } from "react";
import request from "../../../shared/api/request";
import {
  GET_EDUCATIONAL_AND_METHODICAL_DATA,
  UPDATE_EDUCATIONAL_AND_METHODICAL_DATA,
  UPDATE_IND_PLAN_ED_METH_HOURS,
} from "../../../shared/api/requests";
import { setFields } from "../../../shared/functions/setFields";
import { showSuccess } from "../../../redux/Actions";

const EducationalAndMethodicalWorks = () => {
  const name = "educational_and_methodical_works";
  const me = useSelector(getMe);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onTouched",
  });

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
      head_of_department_mark: "",
      note: "",
    });
  };

  const initForm = useCallback(async () => {
    if (me) {
      const formData = await request(
        GET_EDUCATIONAL_AND_METHODICAL_DATA(me.id)
      );

      formData.map((field) => {
        field.date_start = field.date_start ? new Date(field.date_start) : null;
        field.date_end = field.date_end ? new Date(field.date_end) : null;
      });

      setValue(name, [...formData]);
    }
  }, [me, setValue]);

  const save = async (formData) => {
    const data = { ...formData };
    console.log(data);
    await request(
      UPDATE_EDUCATIONAL_AND_METHODICAL_DATA(me.id, setFields(data, null))
    );
    await request(UPDATE_IND_PLAN_ED_METH_HOURS(me.id));
    dispatch(showSuccess("Изменения сохранены!"));
  };

  useEffect(() => {
    initForm();
  }, [initForm]);

  return (
    <form
      onSubmit={handleSubmit(save)}
      className={classes["educational-and-methodical-work"]}
    >
      {fields.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classes["educational-and-methodical-work__item"]}
          >
            <div
              className={classes["educational-and-methodical-work__control"]}
            >
              <Input
                name={`${name}.${index}.name`}
                placeholder="Наименование работ"
                control={control}
              />
            </div>
            <div
              className={
                classes["educational-and-methodical-work__control_work-type"]
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
            <div
              className={classes["educational-and-methodical-work__control"]}
            >
              <p
                className={
                  classes["educational-and-methodical-work__control-title"]
                }
              >
                Сроки выполнения
              </p>
              <div
                className={
                  classes["educational-and-methodical-work__control-inputs"]
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
            <div
              className={classes["educational-and-methodical-work__control"]}
            >
              <Input
                name={`${name}.${index}.head_of_department_mark`}
                placeholder="Отметки заведующего кафедрой о выполнении"
                control={control}
              />
            </div>
            <div
              className={classes["educational-and-methodical-work__control"]}
            >
              <Input
                name={`${name}.${index}.note`}
                placeholder="Примечание"
                control={control}
              />
            </div>
            <div
              className={
                classes["educational-and-methodical-work__form-control"]
              }
            ></div>
            <CustomButton
              color={colors.error}
              theme={buttonThemes.form}
              type="button"
              onClick={() => remove(index)}
            >
              Удалить
            </CustomButton>
          </div>
        );
      })}

      <CustomButton
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

export default EducationalAndMethodicalWorks;
