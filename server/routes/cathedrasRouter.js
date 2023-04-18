const Router = require("express");

const router = new Router();
const cathedrasController = require("../controllers/cathedrasController");

router.get("/", cathedrasController.getAll);

module.exports = router;
