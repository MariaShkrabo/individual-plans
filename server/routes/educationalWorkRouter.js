const Router = require("express");

const router = new Router();
const educationalWorkController = require("../controllers/educationalWorkController");

router.get("/educational-work", educationalWorkController.getEducationalWork);

module.exports = router;
