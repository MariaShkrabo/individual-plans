const Router = require("express");

const router = new Router();

const facultiesRouter = require("./facultiesRouter");
const cathedrasRouter = require("./cathedrasRouter");

router.use("/faculties", facultiesRouter);
router.use("/cathedras", cathedrasRouter);

module.exports = router;
