const Router = require("express");

const router = new Router();
const educationalAndMethodicalWorkController = require("../controllers/educationalAndMethodicalWorkController");

router.get(
  "/educational-and-methodical-work",
  educationalAndMethodicalWorkController.getEducationalAndMethodicalWorksInfo
);

router.get(
  "/educational-and-methodical-work/total-hours",
  educationalAndMethodicalWorkController.getTotalEducationalAndMethodicalWorksHours
);

router.put(
  "/update-educational-and-methodical-work",
  educationalAndMethodicalWorkController.updateEducationalAndMethodicalWorksInfo
);

module.exports = router;
