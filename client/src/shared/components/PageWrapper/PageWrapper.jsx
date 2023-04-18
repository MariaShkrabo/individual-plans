import { useNavigate } from "react-router-dom";
import { useState } from "react";

import classes from "./page-wrapper.module.scss";
import { APPLICATION_ROUTES } from "../../constants";
import Logo from "../Logo/Logo";
import data from "../../../data.json";
import CustomButton from "../Button/Button";
import { buttonThemes, colors } from "../../enums";

const PageWrapper = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate(APPLICATION_ROUTES.login);
    setIsUserAuthenticated(false);
  };

  const handleLogIn = () => {
    navigate(APPLICATION_ROUTES.login);
    setIsUserAuthenticated(true);
  };

  return (
    <div className={classes.pageWrapper}>
      <header className={classes.pageWrapper__header}>
        <Logo
          href={APPLICATION_ROUTES.home}
          src="/img/logo.svg"
          alt="Logo"
          width={70}
          height={70}
        />
        {isUserAuthenticated ? (
          <div className={classes.pageWrapper__header_right}>
            <p>{`${data.surname} ${data.name} ${data.father_name}`}</p>
            <CustomButton
              onClick={handleLogOut}
              theme={buttonThemes.small}
              color={colors.primary}
            >
              Выйти
            </CustomButton>
          </div>
        ) : (
          <CustomButton
            onClick={handleLogIn}
            theme={buttonThemes.small}
            color={colors.primary}
          >
            Войти
          </CustomButton>
        )}
      </header>
      <div className={classes.pageWrapper__gradientContainer}>
        <div className={classes.pageWrapper__container}>
          <div>{children}</div>
        </div>
      </div>
      <footer className={classes.pageWrapper__footer}>
        <p>Автор: Шкрабо Мария Михайловна, группа 10701119</p>
      </footer>
    </div>
  );
};

export default PageWrapper;
