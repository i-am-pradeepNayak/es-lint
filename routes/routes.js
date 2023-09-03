require("express-group-routes");
const { checkUp, csvController, mergeCsvFile } = require("../controllers/testing");
const router = require("express").Router();

router.get("/health", checkUp);
router.post("/test", csvController);
router.post('/mergeCsv', mergeCsvFile);

module.exports = router;
