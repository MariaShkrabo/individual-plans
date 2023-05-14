const Router = require("express");

const router = new Router();
const groupsController = require("../controllers/groupsController");

router.get("/", groupsController.getAll);

module.exports = router;
