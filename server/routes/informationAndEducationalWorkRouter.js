const Router = require("express");

const router = new Router();
const informationAndEducationalWorkController = require("../controllers/informationAndEducationalWorkController");

router.get(
  "/information_and_educational_work",
  informationAndEducationalWorkController.getInformationAndEducationalWorksInfo
);

router.get(
  "/information_and_educational_work/total-hours",
  informationAndEducationalWorkController.getTotalInformationAndEducationalWorksHours
);

router.put(
  "/update-information_and_educational_work",
  informationAndEducationalWorkController.updateInformationAndEducationalWorksInfo
);

module.exports = router;
