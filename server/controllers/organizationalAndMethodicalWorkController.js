const sequelize = require("../db");
const ApiError = require("../error/ApiError");

class OrganizationalAndMethodicalWorksController {
  async getOrganizationalAndMethodicalWorksInfo(req, res) {
    let { id } = req.query;

    const query = `
      SELECT * FROM public.organizational_and_methodical_works
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

  async updateOrganizationalAndMethodicalWorksInfo(req, res, next) {
    let { id } = req.query;

    const { organizational_and_methodical_works } = req.body;

    let queryData = "";

    organizational_and_methodical_works.map((field, index) => {
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
    ${organizational_and_methodical_works.length - 1 !== index ? "," : ";"}`;
    });

    const query = `
      DELETE FROM public.organizational_and_methodical_works 
      WHERE "individualPlanId"=${id};

      INSERT INTO public.organizational_and_methodical_works
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

module.exports = new OrganizationalAndMethodicalWorksController();
