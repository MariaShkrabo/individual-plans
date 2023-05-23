const Router = require("express");

const router = new Router();
const organizationalAndMethodicalWorkController = require("../controllers/organizationalAndMethodicalWorkController");

router.get(
  "/organizational-and-methodical-work",
  organizationalAndMethodicalWorkController.getOrganizationalAndMethodicalWorksInfo
);

router.get(
  "/organizational-and-methodical-work/total-hours",
  organizationalAndMethodicalWorkController.getTotalOrganizationalAndMethodicalWorksHours
);

router.put(
  "/update-organizational-and-methodical-work",
  organizationalAndMethodicalWorkController.updateOrganizationalAndMethodicalWorksInfo
);

module.exports = router;
