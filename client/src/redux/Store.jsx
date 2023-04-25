import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import spinnerReducer from "./Reducers/Spinner";
import userReducer from "./Reducers/User";
import notificationsReducer from "./Reducers/Notification";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const indPlanReducer = combineReducers({
  spinnerVisibility: spinnerReducer,
  user: userReducer,
  notifications: notificationsReducer,
});

const store = createStore(indPlanReducer, composedEnhancer);

export default store;
