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
  specialties: "/specialties/by-faculty",
  groups: "/groups",
  login: "/lectors/login",
  register: "/lectors/registration",
  auth: "/lectors/auth",
  dayWorkload: "individual-plan/day-workload",
  updateDayWorkload: "individual-plan/update-day-workload",
  monthWorkload: "individual-plan/month-workload",
  individualPlanCommonInfo: "individual-plan/common-info",
  updateIndividualPlanCommonInfo: "individual-plan/update-common-info",
  educationalAndMethodicalWork:
    "individual-plan/educational-and-methodical-work",
  updateEducationalAndMethodicalWork:
    "individual-plan/update-educational-and-methodical-work",
  organizationalAndMethodicalWork:
    "individual-plan/organizational-and-methodical-work",
  updateOrganizationalAndMethodicalWork:
    "individual-plan/update-organizational-and-methodical-work",
  informationAndEducationalWork:
    "individual-plan/information_and_educational_work",
  updateInformationAndEducationalWork:
    "individual-plan/update-information_and_educational_work",
  scientificAndResearchWorkThemeName:
    "individual-plan/scientific_and_research_work/theme-name",
  scientificAndResearchWorkStages:
    "individual-plan/scientific_and_research_work/stages",
  scientificAndResearchWorkStudents:
    "individual-plan/scientific_and_research_work/students",
  updateScientificAndResearchWork:
    "individual-plan/update-scientific_and_research_work",
  educationalWork: "/individual-plan/educational-work",
  updateEducationalWork: "/individual-plan/update-educational-work",
  educationalWorkScheduledHours:
    "/individual-plan/educational-work/scheduled-hours",
  totalEducationalWorkScheduledHours:
    "/individual-plan/educational-work/total-scheduled-hours",
  totalEducationalAndMethodicalWorksHours:
    "/individual-plan/educational-and-methodical-work/total-hours",
  totalOrganizationalAndMethodicalWorksHours:
    "/individual-plan/organizational-and-methodical-work/total-hours",
  totalInformationAndEducationalWorksHours:
    "/individual-plan/information_and_educational_work/total-hours",
  totalScientificAndResearchWorksHours:
    "/individual-plan/scientific_and_research_work/stages/total-hours",
  updateIndPlanEdHours: "/individual-plan/update-ed-hours",
  updateIndPlanEdMethHours: "/individual-plan/update-ed-meth-hours",
  updateIndPlanOrgMethHours: "/individual-plan/update-org-meth-hours",
  updateIndPlanScResHours: "/individual-plan/update-sc-res-hours",
  updateIndPlanInfEdHours: "/individual-plan/update-inf-ed-hours",
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

export const WORK_TYPES = [
  {
    id: "1",
    name: "lectures",
    placeholder: "Лекции",
  },
  {
    id: "2",
    name: "seminars",
    placeholder: "Практич. и семинарские занятия",
  },
  {
    id: "3",
    name: "labs",
    placeholder: "Лабораторные занятия",
  },
  {
    id: "4",
    name: "course_design",
    placeholder: "Курсовое проектирование",
  },
  {
    id: "5",
    name: "consultations",
    placeholder: "Консультации",
  },
  {
    id: "6",
    name: "credit_tests",
    placeholder: "Зачёты",
  },
  {
    id: "7",
    name: "exams",
    placeholder: "Экзамены",
  },
  {
    id: "8",
    name: "graduate_students_guidance",
    placeholder: "Руководство аспирантами",
  },
  {
    id: "9",
    name: "diploma_design",
    placeholder: "Дипломное проектирование",
  },
  {
    id: "10",
    name: "sec",
    placeholder: "ГЭК",
  },
  {
    id: "11",
    name: "practice",
    placeholder: "Учебные и произв. практики",
  },
  {
    id: "12",
    name: "undergraduates_guidance",
    placeholder: "Руководство магистрантами",
  },
  {
    id: "13",
    name: "test_works",
    placeholder: "Контрольные работы и РГР",
  },
  {
    id: "14",
    name: "total_hours",
    placeholder: "Всего",
  },
];

export const WORKLOADS_MONTHS = [
  {
    number: 9,
    name: "Сентябрь",
    caseName: "Сентября",
    daysQuantity: 30,
  },
  {
    number: 10,
    name: "Октябрь",
    caseName: "Октября",
    daysQuantity: 31,
  },
  {
    number: 11,
    name: "Ноябрь",
    caseName: "Ноября",
    daysQuantity: 30,
  },
  {
    number: 12,
    name: "Декабрь",
    caseName: "Декабря",
    daysQuantity: 31,
  },
  {
    number: 1,
    name: "Январь",
    caseName: "Января",
    daysQuantity: 31,
  },
  {
    number: 2,
    name: "Февраль",
    caseName: "Февраля",
    daysQuantity: 29,
  },
  {
    number: 3,
    name: "Март",
    caseName: "Марта",
    daysQuantity: 31,
  },
  {
    number: 4,
    name: "Апрель",
    caseName: "Апреля",
    daysQuantity: 30,
  },
  {
    number: 5,
    name: "Май",
    caseName: "Мая",
    daysQuantity: 31,
  },
  {
    number: 6,
    name: "Июнь",
    caseName: "Июня",
    daysQuantity: 30,
  },
];
