import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { APPLICATION_ROUTES } from "./shared/constants";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import PageWrapper from "./shared/components/PageWrapper/PageWrapper";
import Home from "./components/Home/Home";
import AuthenticationGuard from "./shared/guards/AuthenticationGuard";
import IndividualPlanPage from "./components/IndividualPlanPage/IndividualPlanPage";

const IndividualPlan = () => {
  return (
    <PageWrapper>
      <Routes>
        <Route path={APPLICATION_ROUTES.login} element={<Login />} />
        <Route path={APPLICATION_ROUTES.register} element={<Register />} />
        <Route
          index
          path={APPLICATION_ROUTES.home}
          element={
            <AuthenticationGuard>
              <Home />
            </AuthenticationGuard>
          }
        />
        <Route
          index
          path={APPLICATION_ROUTES.editPlan}
          element={
            <AuthenticationGuard>
              <IndividualPlanPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="*"
          element={<Navigate to={APPLICATION_ROUTES.login} replace />}
        ></Route>
      </Routes>
    </PageWrapper>
  );
};

export default IndividualPlan;
