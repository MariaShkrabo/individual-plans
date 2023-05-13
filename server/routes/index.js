const Router = require("express");

const router = new Router();

const facultiesRouter = require("./facultiesRouter");
const cathedrasRouter = require("./cathedrasRouter");
const lectorsRouter = require("./lectorsRouter");
const individualPlanRouter = require("./individualPlanRouter");
const educationalAndMethodicalWorkRouter = require("./educationalAndMethodicalWorkRouter");
const organizationalAndMethodicalWorkRouter = require("./organizationalAndMethodicalWorkRouter");
const informationAndEducationalWorkRouter = require("./informationAndEducationalWorkRouter");
const scientificAndResearchWorkRouter = require("./scientificAndResearchWorkRouter");

router.use("/faculties", facultiesRouter);
router.use("/cathedras", cathedrasRouter);
router.use("/lectors", lectorsRouter);
router.use("/individual-plan", individualPlanRouter);
router.use("/individual-plan", educationalAndMethodicalWorkRouter);
router.use("/individual-plan", organizationalAndMethodicalWorkRouter);
router.use("/individual-plan", informationAndEducationalWorkRouter);
router.use("/individual-plan", scientificAndResearchWorkRouter);

module.exports = router;
