import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { APPLICATION_ROUTES } from "../constants";
import LocalStorageService from "../services/LocalStorageService";
import { getCurrentUser } from "../../redux/Actions";

const AuthenticationGuard = ({ children }) => {
  const [canActivate, setCanActivate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!LocalStorageService.accessToken) {
      navigate(APPLICATION_ROUTES.login);
    } else {
      setCanActivate(true);
    }
  }, [navigate, dispatch]);

  useEffect(() => {
    dispatch(getCurrentUser);
  }, [dispatch]);

  return canActivate && children;
};

export default AuthenticationGuard;
