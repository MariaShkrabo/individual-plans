import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { buttonThemes, colors } from "../../../shared/enums";
import {
  cathedraValidation,
  confirmationValidation,
  defaultRegistrationValues,
  facultyValidation,
  loginValidation,
  nameValidation,
  passwordValidation,
  positionValidation,
  surnameValidation,
} from "../ValidationRules";
import { APPLICATION_ROUTES } from "../../../shared/constants";
import classes from "../auth.module.scss";
import CustomButton from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Input/Input";
import validateConfirmPassword from "../../../shared/validators/PasswordConfirm";
import CustomSelect from "../../../shared/components/Select/Select";
import DateField from "../../../shared/components/DateField/DateField";
import { useCallback, useEffect, useState } from "react";
import request from "../../../shared/api/request";
import { GET_CATHEDRAS, GET_FACULTIES, REGISTER } from "../../../shared/api/requests";
import { showSuccess } from "../../../redux/Actions";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({ defaultRegistrationValues, mode: "onTouched" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordValue = watch("password");
  const facultyId = watch("facultyId");
  const cathedraId = watch("cathedraId");
  const [faculties, setFaculties] = useState([]);
  const [cathedras, setCathedras] = useState([]);

  const register = async (formData) => {
    const { confirmation, ...data } = formData;
    await request(REGISTER(data));
    dispatch(showSuccess("Вы зарегистрированы!"));
    navigate(APPLICATION_ROUTES.login);
  };

  const initFacultyData = useCallback(async () => {
    const faculties = await request(GET_FACULTIES);
    setFaculties(faculties);
  }, []);

  const initCathedraData = useCallback(async () => {
    const cathedras = await request(GET_CATHEDRAS(facultyId));
    setCathedras(cathedras);
  }, [facultyId]);

  useEffect(() => {
    initFacultyData();
    if (facultyId) {
      initCathedraData();
    }
  }, [facultyId, initCathedraData, initFacultyData]);

  return (
    <div className={classes.auth}>
      <form onSubmit={handleSubmit(register)} className={classes.auth__form}>
        <p className={classes["auth__form-title"]}>Регистрация</p>
        <div className={classes["auth__form-control"]}>
          <Input
            name="login"
            error={errors?.login}
            rules={loginValidation}
            placeholder="Логин*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="password"
            error={errors?.password}
            rules={passwordValidation}
            isPassword
            placeholder="Пароль*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="confirmation"
            error={errors?.confirmation}
            rules={{
              ...confirmationValidation,
              validate: validateConfirmPassword(passwordValue),
            }}
            isPassword
            placeholder="Подтверждение пароля*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="surname"
            error={errors?.surname}
            rules={surnameValidation}
            placeholder="Фамилия*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="name"
            error={errors?.name}
            rules={nameValidation}
            placeholder="Имя*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="father_name"
            error={errors?.father_name}
            placeholder="Отчество"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <CustomSelect
            name="facultyId"
            error={errors?.facultyId}
            rules={facultyValidation}
            control={control}
            placeholder="Факультет*"
            options={faculties}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <CustomSelect
            name="cathedraId"
            error={errors?.cathedraId}
            rules={cathedraValidation}
            control={control}
            placeholder="Кафедра*"
            options={cathedras}
            disabled={facultyId ? false : true}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="position"
            error={errors?.position}
            rules={positionValidation}
            placeholder="Должность*"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="academic_title"
            error={errors?.academic_title}
            placeholder="Учёное звание"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <Input
            name="academic_degree"
            error={errors?.academic_degree}
            placeholder="Учёная степень"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <DateField
            name="employment_date"
            error={errors?.employment_date}
            placeholder="Дата приёма на работу"
            control={control}
          />
        </div>
        <div className={classes["auth__form-control"]}>
          <RouterLink
            className={classes["auth__form-control-link"]}
            to="/login"
          >
            У меня есть аккаунт!
          </RouterLink>
        </div>
        <div className={classes["auth__form-control"]}>
          <CustomButton
            color={colors.form}
            theme={buttonThemes.form}
            type="submit"
          >
            Зарегистрироваться
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
