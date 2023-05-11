const Router = require("express");

const router = new Router();

const facultiesRouter = require("./facultiesRouter");
const cathedrasRouter = require("./cathedrasRouter");
const lectorsRouter = require("./lectorsRouter");
const individualPlanRouter = require("./individualPlanRouter");
const educationalAndMethodicalWorkRouter = require("./educationalAndMethodicalWorkRouter");

router.use("/faculties", facultiesRouter);
router.use("/cathedras", cathedrasRouter);
router.use("/lectors", lectorsRouter);
router.use("/individual-plan", individualPlanRouter);
router.use("/individual-plan", educationalAndMethodicalWorkRouter);

module.exports = router;
