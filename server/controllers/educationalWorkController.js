const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class EducationalWorkController {
  async getEducationalWorkScheduledHours(req, res) {
    try {
      let { individualPlanId, semester } = req.query;

      const query = `
        SELECT SUM(e.lectures) as "lectures", SUM(e.seminars) as "seminars",
        SUM(e.labs) as "labs", SUM(e.course_design) as "course_design",
        SUM(e.consultations) as "consultations", SUM(e.consultations) as "consultations",
        SUM(e.credit_tests) as "credit_tests", SUM(e.exams) as "exams",
        SUM(e.graduate_students_guidance) as "graduate_students_guidance", SUM(e.diploma_design) as "diploma_design",
        SUM(e.sec) as "sec", SUM(e.practice) as "practice", SUM(e.undergraduates_guidance) as "undergraduates_guidance",
        SUM(e.test_works) as "test_works", SUM(e.total_hours) as "total_hours"
        FROM public.educational_works e 
        WHERE "individualPlanId"=${individualPlanId} and semester=${semester}
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

  async getTotalEducationalWorkScheduledHours(req, res) {
    try {
      let { individualPlanId } = req.query;

      const query = `
        SELECT SUM(e.lectures) as "lectures", SUM(e.seminars) as "seminars",
        SUM(e.labs) as "labs", SUM(e.course_design) as "course_design",
        SUM(e.consultations) as "consultations", SUM(e.consultations) as "consultations",
        SUM(e.credit_tests) as "credit_tests", SUM(e.exams) as "exams",
        SUM(e.graduate_students_guidance) as "graduate_students_guidance", SUM(e.diploma_design) as "diploma_design",
        SUM(e.sec) as "sec", SUM(e.practice) as "practice", SUM(e.undergraduates_guidance) as "undergraduates_guidance",
        SUM(e.test_works) as "test_works", SUM(e.total_hours) as "total_hours"
        FROM public.educational_works e 
        WHERE "individualPlanId"=${individualPlanId}
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

  async getEducationalWork(req, res) {
    try {
      let { individualPlanId, semester } = req.query;

      const query = `
      SELECT e.id, semester, discipline, educational_streams, 
      actually_done_hours_number, note, "individualPlanId", f.id as "facultyId",
      f.name as faculty, s.id as "specialtyId", s.name as specialty, 
      array_agg("groupNumber") AS groups,
      lectures, seminars, labs, course_design, consultations, 
      credit_tests, exams, graduate_students_guidance,
      diploma_design, sec, practice, undergraduates_guidance, test_works, total_hours, students_quantity
      FROM public.educational_works e 
      join public.faculties f
      on f.id = "facultyId"
      join public.specialties s
      on s.id = "specialtyId"
      LEFT JOIN public.groups_for_disciplines g
      ON e.id="educationalWorkId" 
      WHERE e.id IS NOT NULL and "individualPlanId"=${individualPlanId} and semester=${semester}
      GROUP BY e.id, discipline, semester, educational_streams, faculty, 
      specialty, actually_done_hours_number, note, "individualPlanId",
      lectures, seminars, labs, course_design, consultations,
      credit_tests, exams, graduate_students_guidance,
      diploma_design, sec, practice, undergraduates_guidance, 
      test_works, "facultyId", "specialtyId", total_hours, students_quantity, f.id, s.id;
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

  // async updateEducationalWorksInfo(req, res, next) {
  //   try {
  //     let { individualPlanId, semester } = req.query;

  //     const { educational_works } = req.body;

  //     await EducationalWorks.destroy({
  //       where: {
  //         individualPlanId: individualPlanId,
  //         semester: semester,
  //       },
  //     });

  //     const educationalWorks = await EducationalWorks.bulkCreate(
  //       educational_works
  //     );

  //     return res.status(200).json(educationalWorks);
  //   } catch (e) {
  //     next(ApiError.badRequest(e.message));
  //   }
  // }

  async updateEducationalWorksInfo(req, res, next) {
    try {
      let { individualPlanId, semester } = req.query;

      const { educational_works } = req.body;

      let queryData = "";

      educational_works.map((field, index) => {
        queryData += `(DEFAULT, ${field.semester}, '${field.discipline}', 
          ${field.educational_streams}, ${field.actually_done_hours_number}, 
          '${field.note}', ${field.lectures}, ${field.seminars}, ${field.labs},
          ${field.course_design}, ${field.consultations}, ${field.credit_tests},
          ${field.exams}, ${field.graduate_students_guidance}, 
          ${field.diploma_design},
          ${field.sec}, ${field.practice}, ${field.undergraduates_guidance},
          ${field.test_works}, ${field.total_hours}, ${field.students_quantity},
          ${individualPlanId}, ${field.facultyId}, ${field.specialtyId}
        )
      ${educational_works.length - 1 !== index ? "," : ";"}`;
      });

      const query = `
        DELETE FROM public.educational_works 
        WHERE "individualPlanId"=${individualPlanId} and "semester"=${semester};
  
        INSERT INTO public.educational_works
        VALUES ${queryData}
      `;

      console.log(query);

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

module.exports = new EducationalWorkController();
