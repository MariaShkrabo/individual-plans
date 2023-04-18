import { ENDPOINTS } from "../constants";

export const GET_CATHEDRAS = (facultyId) => ({
  method: "get",
  url: `${ENDPOINTS.cathedras}?facultyId=${facultyId}`,
});
export const GET_FACULTIES = { method: "get", url: ENDPOINTS.faculties };
