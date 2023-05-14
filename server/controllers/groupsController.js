const sequelize = require("../db");

class GroupsController {
  async getAll(req, res) {
    let { specialtyId } = req.query;

    const query = `
      SELECT * FROM public.groups
      where "specialtyId"=${specialtyId}
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

module.exports = new GroupsController();
