const Router = require("express");

const router = new Router();

const facultiesRouter = require("./facultiesRouter");
const cathedrasRouter = require("./cathedrasRouter");
const lectorsRouter = require('./lectorsRouter');

router.use("/faculties", facultiesRouter);
router.use("/cathedras", cathedrasRouter);
router.use("/lectors", lectorsRouter);

module.exports = router;
