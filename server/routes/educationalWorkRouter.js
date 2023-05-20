const Router = require("express");

const router = new Router();
const educationalWorkController = require("../controllers/educationalWorkController");

router.get("/educational-work", educationalWorkController.getEducationalWork);
router.put(
  "/update-educational-work",
  educationalWorkController.updateEducationalWorksInfo
);
router.get(
  "/educational-work/scheduled-hours",
  educationalWorkController.getEducationalWorkScheduledHours
);

router.get(
  "/educational-work/total-scheduled-hours",
  educationalWorkController.getTotalEducationalWorkScheduledHours
);

module.exports = router;
