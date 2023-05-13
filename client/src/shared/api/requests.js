import { ENDPOINTS } from "../constants";

export const GET_CATHEDRAS = (facultyId) => ({
  method: "get",
  url: `${ENDPOINTS.cathedras}?facultyId=${facultyId}`,
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
