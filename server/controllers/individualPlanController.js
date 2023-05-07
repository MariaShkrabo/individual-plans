const sequelize = require("../db");

class IndividualPlansController {
  async getCommonInfo(req, res) {
    let { id } = req.query;

    const query = `
      SELECT i.id, l.surname, l.name, l.father_name, f.name as faculty, 
      c.name as cathedra, "lectorId", year_start, year_end, total_hours,
      protocol_number, plan_approval_date, position, academic_title, academic_degree, employment_date
      FROM public.individual_plans i
      join public.lectors l
      on l.id = "lectorId"
      join public.faculties f
      on f.id = "facultyId"
      join public.cathedras c
      on c.id = "cathedraId"
      where l.id = ${id}
    `;

    await sequelize
      .query(query)
      .then((result) => {
        return res.status(200).json(result[0][0]);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  }
}

module.exports = new IndividualPlansController();
