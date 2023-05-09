import CustomButton from "../../shared/components/Button/Button";
import classes from "./home.module.scss";
import { useGenerateDocument } from "../../shared/hooks/useGenerateDocument";
import { useSelector } from "react-redux";
import { getMe } from "../../redux/Selectors";
import { buttonThemes } from "../../shared/enums";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { generateDocument } = useGenerateDocument();
  const me = useSelector(getMe);
  let navigate = useNavigate();

  const editPlan = () => {
    let path = `/edit-plan`;
    navigate(path);
  };

  return (
    <div className={classes["home"]}>
      <div className={classes["home__common-info"]}>
        <p className={classes["home__common-info-title"]}>
          Индивидуальный план
        </p>
        {me && (
          <>
            <p
              className={classes["home__common-info-name"]}
            >{`${me.surname} ${me.name} ${me.father_name}`}</p>
            <p
              className={classes["home__common-info-position"]}
            >{`${me.position}`}</p>
          </>
        )}
      </div>
      <div className={classes["home__buttons"]}>
        <CustomButton
          theme={buttonThemes.small}
          className={classes["home__buttons_edit"]}
          onClick={editPlan}
        >
          Редактировать план
        </CustomButton>
        <CustomButton
          theme={buttonThemes.small}
          className={classes["home__buttons_download"]}
          onClick={generateDocument}
        >
          Скачать план
        </CustomButton>
      </div>
    </div>
  );
};

export default Home;
