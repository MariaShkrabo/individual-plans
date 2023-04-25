import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import CustomButton from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Input/Input";
import classes from "../auth.module.scss";
import {
  loginValidation,
  passwordValidation,
  defaultLoginValues,
} from "../ValidationRules";
import { buttonThemes, colors } from "../../../shared/enums";
import { APPLICATION_ROUTES } from "../../../shared/constants";
import request from "../../../shared/api/request";
import { LOGIN } from "../../../shared/api/requests";
import LocalStorageService from "../../../shared/services/LocalStorageService";

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultLoginValues });
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const { token } = await request(LOGIN(data));

    LocalStorageService.accessToken = token;
    navigate(APPLICATION_ROUTES.home);
  };

  return (
    <div className={classes.auth}>
      <form className={classes.auth__form} onSubmit={handleSubmit(handleLogin)}>
        <p className={classes["auth__form-title"]}>Авторизация</p>
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
          <RouterLink
            className={classes["auth__form-control-link"]}
            to="/register"
          >
            У меня нет аккаунта!
          </RouterLink>
        </div>
        <div className={classes["auth__form-control"]}>
          <CustomButton
            color={colors.primary}
            theme={buttonThemes.form}
            type="submit"
          >
            Войти
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
