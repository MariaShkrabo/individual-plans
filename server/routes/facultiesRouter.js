const Router = require("express");

const router = new Router();
const facultiesController = require("../controllers/facultiesController");

router.get("/", facultiesController.getAll);

module.exports = router;
