const Router = require("express");

const router = new Router();
const individualPlanController = require("../controllers/individualPlanController");

router.get("/common-info", individualPlanController.getCommonInfo);
router.patch(
  "/update-common-info",
  individualPlanController.updateIndividualPlan
);
router.patch(
  "/update-ed-meth-hours",
  individualPlanController.updateEducationalAndMethodicalWorksHours
);
router.patch(
  "/update-ed-hours",
  individualPlanController.updateEducationalWorksHours
);
router.patch(
  "/update-org-meth-hours",
  individualPlanController.updateOrganizationalAndMethodicalWorksHours
);
router.patch(
  "/update-sc-res-hours",
  individualPlanController.updateScientificAndResearchWorksHours
);
router.patch(
  "/update-inf-ed-hours",
  individualPlanController.updateInformationAndEducationalWorksHours
);

module.exports = router;
