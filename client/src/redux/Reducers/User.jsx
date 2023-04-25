import { USER_LOADED } from '../ActionTypes';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOADED: {
      return action.payload;
    }
    default: {
      return state
    }
  }
};

export default userReducer;
