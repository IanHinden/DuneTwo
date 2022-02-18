const express = require("express");
router = express.Router();
promptController = require("../controllers/promptController");

router.get('/prompts', promptController.getAllPrompts);
router.get('/prompt/:promptId', promptController.getPrompt);
router.get('/latestPrompt', promptController.getLatestPrompt);
router.post('/votePrompt', promptController.votePrompt);

module.exports = router;