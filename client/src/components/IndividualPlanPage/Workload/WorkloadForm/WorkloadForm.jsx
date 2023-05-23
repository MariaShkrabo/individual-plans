import { useFieldArray, useForm } from "react-hook-form";
import CustomButton from "../../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../../shared/enums";
import classes from "./workload-form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../../redux/Selectors";
import DayWorkload from "../DayWorkload/DayWorkload";
import { useCallback, useEffect } from "react";
import request from "../../../../shared/api/request";
import {
  GET_DAY_WORKLOAD,
  UPDATE_DAY_WORKLOAD,
} from "../../../../shared/api/requests";
import { setFields } from "../../../../shared/functions/setFields";
import { showSuccess } from "../../../../redux/Actions";

const WorkloadForm = ({ month, day }) => {
  const name = "workload";

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({ mode: "onTouched" });

  const me = useSelector(getMe);
  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: name,
  });

  const addField = () => {
    append({
      month: month.number,
      day: day,
      discipline: "",
      lectures: null,
      seminars: null,
      labs: null,
      course_design: null,
      consultations: null,
      credit_tests: null,
      exams: null,
      graduate_students_guidance: null,
      diploma_design: null,
      sec: null,
      practice: null,
      undergraduates_guidance: null,
      test_works: null,
      individualPlanId: me.id,
    });
  };

  const save = async (formData) => {
    const data = { ...formData };

    await request(
      UPDATE_DAY_WORKLOAD(me.id, month.number, day, setFields(data, null))
    );
    dispatch(showSuccess("Изменения сохранены!"));
  };

  const initForm = useCallback(async () => {
    if (me) {
      const data = await request(GET_DAY_WORKLOAD(me.id, month.number, day));
      setValue(name, [...data]);
    }
  }, [day, me, month.number, setValue]);

  useEffect(() => {
    initForm();
  }, [initForm]);

  return (
    <form onSubmit={handleSubmit(save)} className={classes["workload-form"]}>
      <ul className={classes["workload-form__list"]}>
        {fields.map((item, index) => {
          return (
            <DayWorkload
              key={item.id}
              control={control}
              remove={remove}
              index={index}
              name={name}
            />
          );
        })}
      </ul>
      <CustomButton
        className={classes["workload-form__button_add"]}
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

export default WorkloadForm;
