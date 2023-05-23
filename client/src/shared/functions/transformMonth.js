import { setFields } from "./setFields";

export const transformMonth = (responseArray) => {
  let month = [];

  for (let i = 1; i <= 31; i++) {
    month.push({
      day: i,
      disciplines: [],
      lectures: "",
      seminars: "",
      labs: "",
      course_design: "",
      consultations: "",
      credit_tests: "",
      exams: "",
      graduate_students_guidance: "",
      diploma_design: "",
      sec: "",
      practice: "",
      undergraduates_guidance: "",
      test_works: "",
    });
  }

  let newMonthObj = { ...month, ...setFields(responseArray, "") };

  return Object.values(newMonthObj).map((e) => e);
};
