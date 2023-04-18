export const SERVER_PORT = 7000;

export const API_BASE_URL = `http://localhost:${SERVER_PORT}/api`;

export const APPLICATION_ROUTES = {
  login: "/login",
  register: "/register",
  home: "/home",
};

export const ENDPOINTS = {
  faculties: "/faculties",
  cathedras: "/cathedras",
};

export const LOCAL_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  expirationTime: 'expirationTime',
  keepMeLoggedIn: 'keepMeLoggedIn',
  currentOrderId: 'currentOrderId'
};

