import { useFieldArray, useForm } from "react-hook-form";
import classes from "./../educational-work.module.scss";
import CustomButton from "../../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../../shared/enums";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../../redux/Selectors";
import request from "../../../../shared/api/request";
import {
  GET_EDUCATIONAL_WORK,
  UPDATE_EDUCATIONAL_WORK,
  UPDATE_IND_PLAN_ED_HOURS,
} from "../../../../shared/api/requests";
import EducationalWorksDiscipline from "./EducationalWorksDiscipline/EducationalWorksDiscipline";
import { showSuccess } from "../../../../redux/Actions";
import { setFields } from "../../../../shared/functions/setFields";

const EducationalWorksDisciplines = ({
  name,
  title,
  setIsDisciplinesShown,
  semester,
}) => {
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
      discipline: "",
      facultyId: null,
      specialtyId: null,
      groups: [],
      students_quantity: null,
      educational_streams: null,
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
      total_hours: null,
      actually_done_hours_number: null,
      note: "",
      semester: semester,
      individualPlanId: me.id
    });
  };

  const initForm = useCallback(async () => {
    if (me) {
      const data = await request(GET_EDUCATIONAL_WORK(me.id, semester));
      setValue(name, [...data]);
    }
  }, [me, name, semester, setValue]);

  useEffect(() => {
    initForm();
  }, [initForm]);

  const save = async (formData) => {
    const data = { ...formData };

    await request(
      UPDATE_EDUCATIONAL_WORK(me.id, semester, setFields(data, null))
    );
    await request(UPDATE_IND_PLAN_ED_HOURS(me.id));
    dispatch(showSuccess("Изменения сохранены!"));
  };

  return (
    <form onSubmit={handleSubmit(save)}>
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
            <EducationalWorksDiscipline
              key={item.id}
              name={name}
              control={control}
              index={index}
              remove={remove}
              watch={watch}
              setValue={setValue}
            />
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
