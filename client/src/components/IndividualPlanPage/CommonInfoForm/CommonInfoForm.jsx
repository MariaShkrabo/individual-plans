import { useForm } from "react-hook-form";
import classes from "./common-info-form.module.scss";
import Input from "../../../shared/components/Input/Input";
import request from "../../../shared/api/request";
import { useCallback, useEffect } from "react";
import {
  GET_INDIVIDUAL_PLAN_COMMON_DATA,
  UPDATE_INDIVIDUAL_PLAN_COMMON_DATA,
} from "../../../shared/api/requests";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../../redux/Selectors";
import DateField from "../../../shared/components/DateField/DateField";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";
import { showSuccess } from "../../../redux/Actions";
import { setFields } from "../../../shared/functions/setFields";
import { hoursValidation } from "../ValidationRules";

const CommonInfoForm = () => {
  const me = useSelector(getMe);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: "onTouched" });

  const save = async (formData) => {
    const data = { ...formData };
    await request(
      UPDATE_INDIVIDUAL_PLAN_COMMON_DATA(me.id, setFields(data, null))
    );
    dispatch(showSuccess("Изменения сохранены!"));

  };

  const initCommonInfoForm = useCallback(async () => {
    if (me) {
      const {
        plan_approval_date,
        year_start,
        year_end,
        ...commonInfoFormData
      } = await request(GET_INDIVIDUAL_PLAN_COMMON_DATA(me.id));

      reset(commonInfoFormData);
      setValue(
        "head",
        `${commonInfoFormData.head_surname} ${commonInfoFormData.head_name[0]}.${commonInfoFormData.head_father_name[0]}.`
      );
      setValue(
        "plan_approval_date",
        plan_approval_date ? new Date(plan_approval_date) : null
      );
      setValue("year_start", year_start ? new Date(year_start) : null);
      setValue("year_end", year_end ? new Date(year_end) : null);
    }
  }, [me, reset, setValue]);

  const totalHours = watch("total_hours");
  const educationalWorksHours = watch("educational_works_hours");
  const educationalAndMethodicalWorksHours = watch(
    "educational_and_methodical_works_hours"
  );
  const organizationalAndMethodicalWorksHours = watch(
    "organizational_and_methodical_works_hours"
  );
  const scientificAndResearchWorksHours = watch(
    "scientific_and_research_works_hours"
  );
  const informationAndEducationalWorksHours = watch(
    "information_and_educational_works_hours"
  );

  useEffect(() => {
    setValue(
      "total_hours",
      +educationalWorksHours +
        +educationalAndMethodicalWorksHours +
        +organizationalAndMethodicalWorksHours +
        +scientificAndResearchWorksHours +
        +informationAndEducationalWorksHours
    );
  }, [
    educationalAndMethodicalWorksHours,
    educationalWorksHours,
    informationAndEducationalWorksHours,
    organizationalAndMethodicalWorksHours,
    scientificAndResearchWorksHours,
    setValue,
    totalHours,
  ]);

  useEffect(() => {
    initCommonInfoForm();
  }, [initCommonInfoForm]);

  return (
    <div className={classes["common-info-form"]}>
      <form onSubmit={handleSubmit(save)} className={classes.auth__form}>
        <div className={classes["common-info-form__control"]}>
          <Input
            name="faculty"
            placeholder="Фaкультет"
            control={control}
            disabled={true}
          />
        </div>
        <div className={classes["common-info-form__control"]}>
          <Input
            name="cathedra"
            placeholder="Кафедра"
            control={control}
            disabled={true}
          />
        </div>
        <div className={classes["common-info-form__control"]}>
          <Input
            name="head"
            placeholder="Заведующий кафедрой"
            control={control}
            disabled={true}
          />
        </div>
        <div className={classes["common-info-form__control"]}>
          <p className={classes["common-info-form__control-title"]}>
            Учебный год
          </p>
          <div className={classes["common-info-form__control-inputs"]}>
            <DateField
              openTo="year"
              views={["year"]}
              name="year_start"
              placeholder="Начало"
              control={control}
            />
            <span>-</span>
            <DateField
              openTo="year"
              views={["year"]}
              name="year_end"
              placeholder="Конец"
              control={control}
            />
          </div>
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <p className={classes["common-info-form__control_work-type-title"]}>
            Виды работ (в часах):
          </p>
          <Input
            name="educational_works_hours"
            placeholder="Учебная"
            control={control}
            type="number"
            changingValue={0}
            error={errors?.educational_works_hours}
            rules={hoursValidation}
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="educational_and_methodical_works_hours"
            placeholder="Учебно-методическая"
            control={control}
            type="number"
            changingValue={0}
            error={errors?.educational_and_methodical_works_hours}
            rules={hoursValidation}
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="organizational_and_methodical_works_hours"
            placeholder="Организационно-методическая"
            control={control}
            type="number"
            changingValue={0}
            error={errors?.organizational_and_methodical_works_hours}
            rules={hoursValidation}
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="scientific_and_research_works_hours"
            placeholder="Научно-исследовательская"
            control={control}
            type="number"
            changingValue={0}
            error={errors?.scientific_and_research_works_hours}
            rules={hoursValidation}
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="information_and_educational_works_hours"
            placeholder="Информационно-воспитательная, общественная и идеологическая"
            control={control}
            type="number"
            changingValue={0}
            error={errors?.information_and_educational_works_hours}
            rules={hoursValidation}
          />
        </div>
        <div className={classes["common-info-form__control_work-type-total"]}>
          <p className={classes["common-info-form__control-title"]}>Всего:</p>
          <Input
            name="total_hours"
            control={control}
            type="number"
            disabled={true}
          />
        </div>

        <div className={classes["common-info-form__control"]}>
          <DateField
            name="plan_approval_date"
            placeholder="Дата утверждения плана"
            control={control}
          />
        </div>
        <div className={classes["common-info-form__control"]}>
          <Input
            name="protocol_number"
            placeholder="Номер протокола"
            control={control}
          />
        </div>
        <div className={classes["common-info-form-control"]}>
          <CustomButton
            color={colors.form}
            theme={buttonThemes.form}
            type="submit"
          >
            Сохранить изменения
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default CommonInfoForm;
