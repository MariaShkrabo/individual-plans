import { useForm } from "react-hook-form";
import classes from "./common-info-form.module.scss";
import Input from "../../../shared/components/Input/Input";
import request from "../../../shared/api/request";
import { useCallback, useEffect, useState } from "react";
import { GET_INDIVIDUAL_PLAN_COMMON_DATA } from "../../../shared/api/requests";
import { useSelector } from "react-redux";
import { getMe } from "../../../redux/Selectors";
import DateField from "../../../shared/components/DateField/DateField";
import CustomButton from "../../../shared/components/Button/Button";
import { buttonThemes, colors } from "../../../shared/enums";

const CommonInfoForm = () => {
  const me = useSelector(getMe);

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ mode: "onTouched" });

  const save = async () => {};

  const initCommonInfoForm = useCallback(async () => {
    if (me) {
      const commonInfoFormData = await request(
        GET_INDIVIDUAL_PLAN_COMMON_DATA(me.id)
      );
      reset(commonInfoFormData);
    }
  }, [me, reset]);

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
            name="educational_work_hours"
            placeholder="Учебная"
            control={control}
            type="number"
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="educational_and_methodical_work_hours"
            placeholder="Учебно-методическая"
            control={control}
            type="number"
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="organizational_and_methodical_work_hours"
            placeholder="Организационно-методическая"
            control={control}
            type="number"
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="scientific_and_research_work_hours"
            placeholder="Научно-исследовательская"
            control={control}
            type="number"
          />
        </div>
        <div className={classes["common-info-form__control_work-type"]}>
          <Input
            name="information_and_educational_work_hours"
            placeholder="Информационно-воспитательная, общественная и идеологическая"
            control={control}
            type="number"
          />
        </div>
        <div className={classes["common-info-form__control_work-type-total"]}>
          <p className={classes["common-info-form__control-title"]}>Всего:</p>
          <Input name="total_hours" control={control} type="number" />
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
        <div className={classes["auth__form-control"]}>
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
