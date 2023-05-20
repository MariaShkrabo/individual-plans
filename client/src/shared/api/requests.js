import { ENDPOINTS } from "../constants";

export const GET_CATHEDRAS = (facultyId) => ({
  method: "get",
  url: `${ENDPOINTS.cathedras}?facultyId=${facultyId}`,
});
export const GET_SPECIALTY_BY_FACULTY = (facultyId) => ({
  method: "get",
  url: `${ENDPOINTS.specialties}?facultyId=${facultyId}`,
});
export const GET_GROUPS = (specialtyId) => ({
  method: "get",
  url: `${ENDPOINTS.groups}?specialtyId=${specialtyId}`,
});
export const GET_FACULTIES = { method: "get", url: ENDPOINTS.faculties };
export const REGISTER = (data) => ({
  method: "post",
  url: ENDPOINTS.register,
  data,
});
export const LOGIN = (data) => ({ method: "post", url: ENDPOINTS.login, data });

export const GET_INDIVIDUAL_PLAN_COMMON_DATA = (lectorId) => ({
  method: "get",
  url: `${ENDPOINTS.individualPlanCommonInfo}?id=${lectorId}`,
});

export const UPDATE_INDIVIDUAL_PLAN_COMMON_DATA = (lectorId, data) => ({
  method: "patch",
  url: `${ENDPOINTS.updateIndividualPlanCommonInfo}?id=${lectorId}`,
  data,
});

export const GET_EDUCATIONAL_AND_METHODICAL_DATA = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.educationalAndMethodicalWork}?id=${individualPlanId}`,
});

export const UPDATE_EDUCATIONAL_AND_METHODICAL_DATA = (
  individualPlanId,
  data
) => ({
  method: "put",
  url: `${ENDPOINTS.updateEducationalAndMethodicalWork}?id=${individualPlanId}`,
  data,
});

export const GET_ORGANIZATIONAL_AND_METHODICAL_DATA = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.organizationalAndMethodicalWork}?id=${individualPlanId}`,
});

export const UPDATE_ORGANIZATIONAL_AND_METHODICAL_DATA = (
  individualPlanId,
  data
) => ({
  method: "put",
  url: `${ENDPOINTS.updateOrganizationalAndMethodicalWork}?id=${individualPlanId}`,
  data,
});

export const GET_INFORMATION_AND_EDUCATIONAL_DATA = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.informationAndEducationalWork}?id=${individualPlanId}`,
});

export const UPDATE_INFORMATION_AND_EDUCATIONAL_DATA = (
  individualPlanId,
  data
) => ({
  method: "put",
  url: `${ENDPOINTS.updateInformationAndEducationalWork}?id=${individualPlanId}`,
  data,
});

export const GET_SCIENTIFIC_THEME = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.scientificAndResearchWorkThemeName}?id=${individualPlanId}`,
});

export const GET_SCIENTIFIC_WORK_STAGES = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.scientificAndResearchWorkStages}?id=${individualPlanId}`,
});

export const GET_STUDENTS_SCIENTIFIC_WORK = (individualPlanId) => ({
  method: "get",
  url: `${ENDPOINTS.scientificAndResearchWorkStudents}?id=${individualPlanId}`,
});

export const UPDATE_SCIENTIFIC_AND_RESEARCH_WORK_DATA = (
  individualPlanId,
  data
) => ({
  method: "put",
  url: `${ENDPOINTS.updateScientificAndResearchWork}?id=${individualPlanId}`,
  data,
});

export const GET_EDUCATIONAL_WORK = (individualPlanId, semester) => ({
  method: "get",
  url: `${ENDPOINTS.educationalWork}?individualPlanId=${individualPlanId}&semester=${semester}`,
});

export const UPDATE_EDUCATIONAL_WORK = (individualPlanId, semester, data) => ({
  method: "put",
  url: `${ENDPOINTS.updateEducationalWork}?individualPlanId=${individualPlanId}&semester=${semester}`,
  data,
});

export const GET_EDUCATIONAL_WORK_SCHEDULED_HOURS = (
  individualPlanId,
  semester
) => ({
  method: "get",
  url: `${ENDPOINTS.educationalWorkScheduledHours}?individualPlanId=${individualPlanId}&semester=${semester}`,
});

export const GET_TOTAL_EDUCATIONAL_WORK_SCHEDULED_HOURS = (
  individualPlanId
) => ({
  method: "get",
  url: `${ENDPOINTS.totalEducationalWorkScheduledHours}?individualPlanId=${individualPlanId}`,
});
