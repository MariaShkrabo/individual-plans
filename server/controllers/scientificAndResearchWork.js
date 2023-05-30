const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class ScientificAndResearchWorkController {
  async getTotalScientificAndResearchWorksHours(req, res) {
    let { individualPlanId } = req.query;

    const query = `
      SELECT SUM(s.hours_number) as "scientific_and_research_works_hours"
      FROM public.scientific_and_research_work_stages s
      WHERE "individualPlanId"=${individualPlanId}
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

  async getScientificAndResearchWorkThemeName(req, res) {
    let { individualPlanId } = req.query;

    const query = `
      SELECT scientific_and_research_theme_name FROM public.individual_plans
      WHERE id=${individualPlanId};
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
    let { individualPlanId } = req.query;

    const query = `
      SELECT * FROM public.scientific_and_research_work_stages
      WHERE "individualPlanId"=${individualPlanId};
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
    let { individualPlanId } = req.query;

    const query = `
      SELECT * FROM public.scientific_and_research_students_works
      WHERE "individualPlanId"=${individualPlanId};
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

      const { individualPlanId } = req.query;

      console.log(scientific_and_research_students_works);

      const query = `
        UPDATE public.individual_plans
        SET scientific_and_research_theme_name='${scientific_and_research_theme_name}'
        WHERE id = ${individualPlanId};

        DELETE FROM public.scientific_and_research_work_stages
        WHERE "individualPlanId"=${individualPlanId};
        INSERT INTO public.scientific_and_research_work_stages
        VALUES ${formQueryData(
          scientific_and_research_work_stages,
          individualPlanId
        )}

        ${
          scientific_and_research_students_works.length !== 0
            ? `
        DELETE FROM public.scientific_and_research_students_works
        WHERE "individualPlanId"=${individualPlanId};
        INSERT INTO public.scientific_and_research_students_works
        VALUES ${formQueryData(
          scientific_and_research_students_works,
          individualPlanId
        )}
        `
            : ""
        }  
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
