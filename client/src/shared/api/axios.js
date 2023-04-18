import axios from "axios";

import { API_BASE_URL, APPLICATION_ROUTES } from "../constants";
//import { hideSpinner, showError } from "../../redux/Actions";
import { accessTokenInterceptor } from "./interceptors";
import { backEndStatusCodes } from "../enums";
//import store from "../../redux/Store";
import LocalStorageService from "../services/LocalStorageService";

const axiosInstance = axios.create({ baseURL: API_BASE_URL });

axiosInstance.interceptors.request.use(accessTokenInterceptor);
axiosInstance.interceptors.response.use(
  (response) => response.data,
  ({
    response: {
      data: { message, statusCode },
    },
  }) => {
    //store.dispatch(hideSpinner);

    if (statusCode === backEndStatusCodes.notAuthenticated) {
      window.location.replace(APPLICATION_ROUTES.login);
      LocalStorageService.clear();
    } else {
      //store.dispatch(showError(message));
      throw new Error(message);
    }
  }
);

export default axiosInstance;
