const { Cathedras } = require("../models/models");

class CathedrasController {
  async getAll(req, res) {
    let { facultyId } = req.query;
    let cathedras;

    if (facultyId) {
      cathedras = await Cathedras.findAll({ where: { facultyId } });
    } else {
      cathedras = await Cathedras.findAll();
    }
    return res.status(200).json(cathedras);
  }
}

module.exports = new CathedrasController();
