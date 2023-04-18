import { Link } from "react-router-dom";

import classes from "./not-found.module.scss";
import { APPLICATION_ROUTES } from "../../shared/constants";
import { Button } from "@mui/material";

const NotFound = () => {
  return (
    <div className={classes["not-found-page"]}>
      <div>Страница не найдена</div>
      <Link to={APPLICATION_ROUTES.home}>
        <Button>На главную страницу</Button>
      </Link>
    </div>
  );
};

export default NotFound;
