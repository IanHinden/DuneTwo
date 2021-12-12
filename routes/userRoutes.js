const express = require("express");
router = express.Router();
userController = require("../controllers/userController");

router.post('/register', userController.register);
router.get('/login', userController.login);
router.post('/register_login', userController.register_login);

module.exports = router;