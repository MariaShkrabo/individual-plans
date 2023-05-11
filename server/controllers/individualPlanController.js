const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class IndividualPlansController {
  async getCommonInfo(req, res) {
    let { id } = req.query;

    const query = `
      SELECT i.id, l.surname, l.name, l.father_name, f.name as faculty, 
      c.name as cathedra, "lectorId", year_start, year_end, total_hours,
      protocol_number, plan_approval_date, position, academic_title, academic_degree, employment_date,
      c.head_surname, c.head_name, c.head_father_name, 	
      educational_works_hours, educational_and_methodical_works_hours, organizational_and_methodical_works_hours,
      scientific_and_research_works_hours, information_and_educational_works_hours
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

  async updateIndividualPlan(req, res, next) {
    try {
      const {
        protocol_number,
        plan_approval_date,
        year_start,
        year_end,
        total_hours,
        educational_and_methodical_works_hours,
        educational_works_hours,
        information_and_educational_works_hours,
        organizational_and_methodical_works_hours,
        scientific_and_research_works_hours,
      } = req.body;

      const { id } = req.query;

      const query = `
        UPDATE public.individual_plans
        SET protocol_number=${protocol_number}, 
        plan_approval_date=${
          plan_approval_date
            ? `'${plan_approval_date}'`
            : `${plan_approval_date}`
        },
        year_start=${year_start ? `'${year_start}'` : `${year_start}`}, 
        year_end=${year_end ? `'${year_end}'` : `${year_end}`}, 
        total_hours=${total_hours},
        educational_and_methodical_works_hours=${educational_and_methodical_works_hours},
        educational_works_hours=${educational_works_hours}, 
        information_and_educational_works_hours=${information_and_educational_works_hours},
        organizational_and_methodical_works_hours=${organizational_and_methodical_works_hours},
        scientific_and_research_works_hours=${scientific_and_research_works_hours}
        WHERE id = ${id}
    `;

      await sequelize.query(query).then((result) => {
        return res.status(200).json(`Изменения сохранены!`);
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new IndividualPlansController();
