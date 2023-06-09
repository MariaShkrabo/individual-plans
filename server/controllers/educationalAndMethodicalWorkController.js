const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class EducationalAndMethodicalWorksController {
  async getTotalEducationalAndMethodicalWorksHours(req, res) {
    let { individualPlanId } = req.query;

    const query = `
      SELECT SUM(e.hours_number) as "educational_and_methodical_works_hours"
      FROM public.educational_and_methodical_works e
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

  async getEducationalAndMethodicalWorksInfo(req, res) {
    let { id } = req.query;

    const query = `
      SELECT * FROM public.educational_and_methodical_works
      WHERE "individualPlanId"=${id}
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

  async updateEducationalAndMethodicalWorksInfo(req, res, next) {
    let { id } = req.query;

    const { educational_and_methodical_works } = req.body;

    let queryData = "";

    educational_and_methodical_works.map((field, index) => {
      queryData += `(DEFAULT, '${field.name}', 
    ${field.hours_number}, '${field.date_start}', 
    '${field.date_start}', 
    ${
      field.head_of_department_mark
        ? `'${field.head_of_department_mark}'`
        : null
    },
    ${field.note ? `'${field.note}'` : null},
    ${id})
    ${educational_and_methodical_works.length - 1 !== index ? "," : ";"}`;
    });

    const query = `
      DELETE FROM public.educational_and_methodical_works 
      WHERE "individualPlanId"=${id};

      INSERT INTO public.educational_and_methodical_works
      VALUES ${queryData}
    `;

    await sequelize
      .query(query)
      .then((result) => {
        return res.status(200).json(`Изменения сохранены!`);
      })
      .catch((error) => {
        next(ApiError.badRequest(error.message));
      });
  }
}

module.exports = new EducationalAndMethodicalWorksController();
