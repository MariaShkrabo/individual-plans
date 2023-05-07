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
