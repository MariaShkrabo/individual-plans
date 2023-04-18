//import { hideSpinner, showSpinner } from "../../redux/Actions";
//import store from "../../redux/Store";
import axiosInstance from "./axios";

const request = async (payload) => {
  let response;

  //store.dispatch(showSpinner);

  if (Array.isArray(payload)) {
    response = await Promise.all(payload.map((item) => axiosInstance(item)));
  } else {
    response = await axiosInstance(payload);
  }

  //store.dispatch(hideSpinner);

  return response;
};

export default request;
