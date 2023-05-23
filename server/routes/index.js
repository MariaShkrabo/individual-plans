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
const specialtiesRouter = require("./specialtiesRouter");
const groupsRouter = require("./groupsRouter");
const educationalWorkRouter = require("./educationalWorkRouter");
const workloadRouter = require("./workloadRouter");

router.use("/faculties", facultiesRouter);
router.use("/cathedras", cathedrasRouter);
router.use("/lectors", lectorsRouter);
router.use("/individual-plan", individualPlanRouter);
router.use("/individual-plan", educationalAndMethodicalWorkRouter);
router.use("/individual-plan", organizationalAndMethodicalWorkRouter);
router.use("/individual-plan", informationAndEducationalWorkRouter);
router.use("/individual-plan", scientificAndResearchWorkRouter);
router.use("/specialties", specialtiesRouter);
router.use("/groups", groupsRouter);
router.use("/individual-plan", educationalWorkRouter);
router.use("/individual-plan", workloadRouter);

module.exports = router;
