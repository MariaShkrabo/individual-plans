const { Faculties } = require("../models/models");

class FacultiesController {
  async getAll(req, res){
    const faculties = await Faculties.findAll();
    return res.status(200).json(faculties);
}
}

module.exports = new FacultiesController();
