import { useFieldArray, useForm } from "react-hook-form";
import classes from "./../educational-work.module.scss";
import CustomButton from "../../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../../shared/enums";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../../redux/Selectors";
import request from "../../../../shared/api/request";
import { GET_EDUCATIONAL_WORK } from "../../../../shared/api/requests";
import EducationalWorksDiscipline from "./EducationalWorksDiscipline/EducationalWorksDiscipline";

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
      faculty_id: "",
      specialty_id: "",
      groups: [],
      students_quantity: "",
      educational_streams: "",
      lectures: "",
      seminars: "",
      labs: "",
      course_design: "",
      consultations: "",
      credit_tests: "",
      exams: "",
      graduate_students_guidance: "",
      diploma_design: "",
      sec: "",
      practice: "",
      undergraduates_guidance: "",
      test_works: "",
      actually_done_hours_number: "",
      note: "",
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

  const save = (data) => console.log(data);

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
