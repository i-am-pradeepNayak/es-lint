require("express-group-routes");
const router = require("express").Router();
const {
    checkUp,
    csvController,
    mergeCsvFile,
} = require("../controllers/testing");

router.get("/health",
checkUp);
router.post("/test",
csvController);
router.post("/mergeCsv",
mergeCsvFile);

module.exports = router;
