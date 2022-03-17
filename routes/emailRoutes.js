const express = require("express");
router = express.Router();

emailsController = require("../controllers/emailsController");

router.post('/confirmation', emailsController.confirmation);

module.exports = router;