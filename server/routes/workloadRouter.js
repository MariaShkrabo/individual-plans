const Router = require("express");
const router = new Router();
const workloadController = require("../controllers/workloadController");

router.get("/day-workload", workloadController.getDayWorkload);
router.get("/month-workload", workloadController.getMonthWorkload);
router.put("/update-day-workload", workloadController.updateDayWorkload);

module.exports = router;

