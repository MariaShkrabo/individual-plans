export const SERVER_PORT = 7000;
export const MAX_NOTIFICATION_NUMBER = 4;

export const API_BASE_URL = `http://localhost:${SERVER_PORT}/api`;

export const APPLICATION_ROUTES = {
  login: "/login",
  register: "/register",
  home: "/home",
  editPlan: "/edit-plan",
};

export const ENDPOINTS = {
  faculties: "/faculties",
  cathedras: "/cathedras",
  login: "/lectors/login",
  register: "/lectors/registration",
  auth: "/lectors/auth",
  individualPlanCommonInfo: "individual-plan/common-info",
  updateIndividualPlanCommonInfo: "individual-plan/update-common-info",
  educationalAndMethodicalWork:
    "individual-plan/educational-and-methodical-work",
  updateEducationalAndMethodicalWork:
    "individual-plan/update-educational-and-methodical-work",
};

export const LOCAL_STORAGE_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  expirationTime: "expirationTime",
  keepMeLoggedIn: "keepMeLoggedIn",
};

export const PLAN_SECTIONS = [
  {
    id: "1",
    title: "Общая информация",
  },
  {
    id: "2",
    title: "Учебная работа",
  },
  {
    id: "3",
    title: "Учебно-методическая работа",
  },
  {
    id: "4",
    title: "Организационно-методическая работа",
  },
  {
    id: "5",
    title: "Научно-исследовательская работа",
  },
  {
    id: "6",
    title: "Информационно-воспитательная, общественная и идеологическая работа",
  },
  {
    id: "7",
    title: "Выполнение нагрузки по месяцам",
  },
];
