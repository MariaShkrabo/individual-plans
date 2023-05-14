const sequelize = require("../db");

class SpecialtiesController {
  async getAllByCathedraId(req, res) {
    let { cathedraId } = req.query;

    const query = `
      SELECT * FROM public.specialties
      where "cathedraId"=${cathedraId}
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

  async getAllByFacultyId(req, res) {
    let { facultyId } = req.query;

    const query = `
      SELECT s.id, s.name, s.full_name, s.number
	    FROM public.specialties s
	    join public.cathedras c
      on c.id = "cathedraId"
      where "facultyId"=${facultyId}
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

module.exports = new SpecialtiesController();
