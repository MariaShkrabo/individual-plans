import axiosInstance from '../shared/api/axios';
import { ENDPOINTS } from '../shared/constants';
import { DELETE_NOTIFICATION, HIDE_SPINNER, SHOW_ERROR, SHOW_SPINNER, SHOW_SUCCESS, SHOW_WARNING, USER_LOADED } from './ActionTypes';

export const showSpinner =  {
  type: SHOW_SPINNER
};

export const hideSpinner =  {
  type: HIDE_SPINNER
};

export const showSuccess = text => ({
  type: SHOW_SUCCESS,
  payload: text
});

export const showWarning = text => ({
  type: SHOW_WARNING,
  payload: text
});

export const showError = text => ({
  type: SHOW_ERROR,
  payload: text
});

export const deleteNotification = id => ({
  type: DELETE_NOTIFICATION,
  payload: id
});

export const userLoaded = user => ({
  type: USER_LOADED,
  payload: user
});

export const getCurrentUser = async dispatch => {
  dispatch(showSpinner);

  const me = await axiosInstance.get(ENDPOINTS.auth);
  dispatch(userLoaded(me));

  dispatch(hideSpinner);
};
