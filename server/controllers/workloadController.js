const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class WorkloadController {
  async getDayWorkload(req, res) {
    try {
      let { individualPlanId, month, day } = req.query;

      const query = `
      SELECT * FROM public.workloads w
      WHERE "individualPlanId"=${individualPlanId} 
      AND w.day=${day} 
      AND w.month=${month}
    `;

      await sequelize
        .query(query)
        .then((result) => {
          return res.status(200).json(result[0]);
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getMonthWorkload(req, res) {
    try {
      let { individualPlanId, month } = req.query;

      const query = `
      SELECT w.day, array_agg(w.discipline) AS disciplines,
      SUM(w.lectures) as "lectures", SUM(w.seminars) as "seminars",
      SUM(w.labs) as "labs", SUM(w.course_design) as "course_design",
      SUM(w.consultations) as "consultations", SUM(w.consultations) as "consultations",
      SUM(w.credit_tests) as "credit_tests", SUM(w.exams) as "exams",
      SUM(w.graduate_students_guidance) as "graduate_students_guidance", 
      SUM(w.diploma_design) as "diploma_design",
      SUM(w.sec) as "sec", SUM(w.practice) as "practice", 
      SUM(w.undergraduates_guidance) as "undergraduates_guidance",
      SUM(w.test_works) as "test_works"
      FROM public.workloads w
      WHERE "individualPlanId"=${individualPlanId}
      AND w.month=${month}
      GROUP BY w.day
    `;

      await sequelize
        .query(query)
        .then((result) => {
          return res.status(200).json(result[0]);
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateDayWorkload(req, res, next) {
    try {
      let { individualPlanId, month, day } = req.query;

      const { workload } = req.body;

      let queryData = "";

      workload.map((field, index) => {
        queryData += `(DEFAULT, ${month}, ${day}, '${field.discipline}', 
          ${field.lectures}, ${field.seminars}, ${field.labs},
          ${field.course_design}, ${field.consultations}, ${field.credit_tests},
          ${field.exams}, ${field.graduate_students_guidance}, 
          ${field.diploma_design},
          ${field.sec}, ${field.practice}, ${field.undergraduates_guidance},
          ${field.test_works}, ${individualPlanId}
        )
      ${workload.length - 1 !== index ? "," : ";"}`;
      });

      const query = `
        DELETE FROM public.workloads 
        WHERE "individualPlanId"=${individualPlanId} 
        and "month"=${month} and "day"=${day};
  
        INSERT INTO public.workloads
        VALUES ${queryData}
      `;

      await sequelize
        .query(query)
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((error) => {
          next(ApiError.badRequest(error.message));
        });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new WorkloadController();
