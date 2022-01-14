const express = require("express");
router = express.Router();
promptController = require("../controllers/promptController");

router.get('/prompts', promptController.getAllPrompts);
router.get('/latestPrompt', promptController.getLatestPrompt);

module.exports = router;