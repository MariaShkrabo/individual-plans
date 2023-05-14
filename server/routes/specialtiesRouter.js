const Router = require("express");

const router = new Router();
const specialtiesController = require("../controllers/specialtiesController");

router.get("/by-cathedra", specialtiesController.getAllByCathedraId);
router.get("/by-faculty", specialtiesController.getAllByFacultyId);

module.exports = router;
