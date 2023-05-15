const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class EducationalWorkController {
  async getEducationalWork(req, res) {
    let { individualPlanId, semester } = req.query;

    const query = `
      SELECT e.id, semester, discipline, educational_streams, 
      actually_done_hours_number, note, "individualPlanId", f.id as faculty_id,
      f.name as faculty, s.id as specialty_id, s.name as specialty, 
      array_agg("groupNumber") AS groups,
      lectures, seminars, labs, course_design, consultations, 
      credit_tests, exams, graduate_students_guidance,
      diploma_design, sec, practice, undergraduates_guidance, test_works
      FROM public.educational_works e 
      join public.faculties f
      on f.id = "facultyId"
      join public.specialties s
      on s.id = "specialtyId"
      JOIN public.groups_for_disciplines g
      ON e.id="educationalWorkId" 
      WHERE e.id IS NOT NULL and "individualPlanId"=${individualPlanId} and semester=${semester}
      GROUP BY e.id, discipline, semester, educational_streams, faculty, 
      specialty, actually_done_hours_number, note, "individualPlanId",
      lectures, seminars, labs, course_design, consultations,
      credit_tests, exams, graduate_students_guidance,
      diploma_design, sec, practice, undergraduates_guidance, 
      test_works, faculty_id, specialty_id;
    `;

    await sequelize
      .query(query)
      .then((result) => {
        return res.status(200).json(result[0]);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  }
}

module.exports = new EducationalWorkController();
