const Router = require("express");

const router = new Router();
const individualPlanController = require("../controllers/individualPlanController");

router.get("/common-info", individualPlanController.getCommonInfo);
router.patch("/update-common-info", individualPlanController.updateIndividualPlan);

module.exports = router;
