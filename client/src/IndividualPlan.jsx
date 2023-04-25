import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//import { Button } from "@mui/material";

//import { useGenerateDocument } from "./shared/hooks/useGenerateDocument";
import { APPLICATION_ROUTES } from "./shared/constants";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import PageWrapper from "./shared/components/PageWrapper/PageWrapper";
import Home from "./components/Home/Home";
import AuthenticationGuard from "./shared/guards/AuthenticationGuard";

const IndividualPlan = () => {
  //const { generateDocument } = useGenerateDocument();

  return (
    <PageWrapper>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={APPLICATION_ROUTES.home} replace />}
        />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Button variant="contained" onClick={generateDocument}>
        Generate Document
      </Button> */}
    </PageWrapper>
  );
};

export default IndividualPlan;
