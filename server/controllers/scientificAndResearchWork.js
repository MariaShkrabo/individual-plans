const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class ScientificAndResearchWorkController {
  async getScientificAndResearchWorkThemeName(req, res) {
    let { id } = req.query;

    const query = `
      SELECT scientific_and_research_theme_name FROM public.individual_plans
      WHERE id=${id};
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

  async getScientificAndResearchWorkStages(req, res) {
    let { id } = req.query;

    const query = `
      SELECT * FROM public.scientific_and_research_work_stages
      WHERE "individualPlanId"=${id};
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

  async getScientificAndResearchStudentsWorks(req, res) {
    let { id } = req.query;

    const query = `
      SELECT * FROM public.scientific_and_research_students_works
      WHERE "individualPlanId"=${id};
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

  async updateScientificAndResearchWorks(req, res, next) {
    const formQueryData = (responseData, id) => {
      let queryData = "";

      responseData.map((field, index) => {
        queryData += `(DEFAULT, '${field.name}', 
      ${field.hours_number}, '${field.date_start}', 
      '${field.date_start}',
      ${field.reporting_form ? `'${field.reporting_form}'` : null},
      ${
        field.head_of_department_mark
          ? `'${field.head_of_department_mark}'`
          : null
      },
      ${field.note ? `'${field.note}'` : null},
      ${id})
      ${responseData.length - 1 !== index ? "," : ";"}`;
      });

      return queryData;
    };

    try {
      const {
        scientific_and_research_theme_name,
        scientific_and_research_work_stages,
        scientific_and_research_students_works,
      } = req.body;

      const { id } = req.query;

      const query = `
        UPDATE public.individual_plans
        SET scientific_and_research_theme_name='${scientific_and_research_theme_name}'
        WHERE id = ${id};

        DELETE FROM public.scientific_and_research_work_stages
        WHERE "individualPlanId"=${id};
        INSERT INTO public.scientific_and_research_work_stages
        VALUES ${formQueryData(scientific_and_research_work_stages, id)}

        DELETE FROM public.scientific_and_research_students_works
        WHERE "individualPlanId"=${id};
        INSERT INTO public.scientific_and_research_students_works
        VALUES ${formQueryData(scientific_and_research_students_works, id)}
    `;

      await sequelize.query(query).then((result) => {
        return res.status(200).json(`Изменения сохранены!`);
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ScientificAndResearchWorkController();
