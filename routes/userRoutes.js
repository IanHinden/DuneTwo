const express = require("express");
router = express.Router();
userController = require("../controllers/userController");

router.post('/register', userController.register);

module.exports = router;