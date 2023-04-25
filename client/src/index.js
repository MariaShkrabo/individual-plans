import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import MaterialThemeProvider from "./shared/providers/MaterialThemeProvider";
import Notifications from "./shared/components/Notifications/Notifications";
import "./index.scss";
import IndividualPlan from "./IndividualPlan";
import store from "./redux/Store";
import Spinner from "./shared/components/Spinner/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MaterialThemeProvider>
        <IndividualPlan />
        <Spinner />
        <Notifications />
      </MaterialThemeProvider>
    </BrowserRouter>
  </Provider>
);
