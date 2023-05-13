const Router = require("express");

const router = new Router();
const scientificAndResearchWorkController = require("../controllers/scientificAndResearchWork");

router.get(
  "/scientific_and_research_work/theme-name",
  scientificAndResearchWorkController.getScientificAndResearchWorkThemeName
);

router.get(
  "/scientific_and_research_work/stages",
  scientificAndResearchWorkController.getScientificAndResearchWorkStages
);

router.get(
  "/scientific_and_research_work/students",
  scientificAndResearchWorkController.getScientificAndResearchStudentsWorks
);

router.put(
  "/update-scientific_and_research_work",
  scientificAndResearchWorkController.updateScientificAndResearchWorks
);

module.exports = router;
