export const SERVER_PORT = 7000;
export const MAX_NOTIFICATION_NUMBER = 4;

export const API_BASE_URL = `http://localhost:${SERVER_PORT}/api`;

export const APPLICATION_ROUTES = {
  login: "/login",
  register: "/register",
  home: "/home",
};

export const ENDPOINTS = {
  faculties: "/faculties",
  cathedras: "/cathedras",
  login: "/lectors/login",
  register: "/lectors/registration",
  auth: "/lectors/auth",
  individualPlanCommonInfo: "individual-plan/common-info",
};

export const LOCAL_STORAGE_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  expirationTime: "expirationTime",
  keepMeLoggedIn: "keepMeLoggedIn",
};
