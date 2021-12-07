const express = require("express");
router = express.Router();
userController = require("../controllers/userController");

router.post('/register', userController.register);
router.get('/login', userController.login);

module.exports = router;