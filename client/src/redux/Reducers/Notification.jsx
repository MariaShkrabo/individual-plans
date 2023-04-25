import uniqid from 'uniqid';

import { DELETE_NOTIFICATION, SHOW_ERROR, SHOW_SUCCESS, SHOW_WARNING } from '../ActionTypes';
import { notificationTypes } from '../../shared/enums';
import { MAX_NOTIFICATION_NUMBER } from '../../shared/constants';
 
const notificationsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case SHOW_SUCCESS: {
      return addNotificationToState(state, notificationTypes.success, payload);
    }
    case SHOW_WARNING: {
      return addNotificationToState(state, notificationTypes.warning, payload);
    }
    case SHOW_ERROR: {
      return addNotificationToState(state, notificationTypes.error, payload);
    }
    case DELETE_NOTIFICATION: {
      return state.filter(notification => notification.id !== payload);
    }
    default: {
      return state;
    }
  }
}

const addNotificationToState = (state, type, payload) => {
  if (state.length === MAX_NOTIFICATION_NUMBER) {
    state.shift();
  }

  return [...state, {type, id: uniqid(), text: payload}];
}

export default notificationsReducer;
