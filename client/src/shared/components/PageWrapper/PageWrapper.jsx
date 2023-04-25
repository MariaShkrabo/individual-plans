import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import classes from "./page-wrapper.module.scss";
import { APPLICATION_ROUTES } from "../../constants";
import Logo from "../Logo/Logo";
import CustomButton from "../Button/Button";
import { buttonThemes, colors } from "../../enums";
import LocalStorageService from "../../services/LocalStorageService";
import { userLoaded } from "../../../redux/Actions";
import { getMe } from "../../../redux/Selectors";

const PageWrapper = ({ children }) => {
  const isUserAuthenticated = !!LocalStorageService.accessToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    navigate(APPLICATION_ROUTES.login);
    dispatch(userLoaded(null));
    LocalStorageService.clear();
  };

  const me = useSelector(getMe);

  return (
    <div className={classes.pageWrapper}>
      <header className={classes.pageWrapper__header}>
        <Logo
          href={isUserAuthenticated ? APPLICATION_ROUTES.home : APPLICATION_ROUTES.login}
          src="/img/logo.svg"
          alt="Logo"
          width={70}
          height={70}
        />
        {isUserAuthenticated && (
          <div className={classes.pageWrapper__header_right}>
            {me && (
              <p>{`${me.surname} ${me.name} ${me.father_name} (${me.login})`}</p>
            )}
            <CustomButton
              onClick={handleLogOut}
              theme={buttonThemes.small}
              color={colors.primary}
            >
              Выйти
            </CustomButton>
          </div>
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
