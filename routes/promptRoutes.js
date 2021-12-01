const express = require("express");
router = express.Router();
promptController = require("../controllers/promptController");

router.get('/prompts', promptController.getAllPrompts);

module.exports = router;