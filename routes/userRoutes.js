const express = require("express");
const passport = require("passport");
router = express.Router();
userController = require("../controllers/userController");
require('../passport');

router.post('/register', userController.register);
router.get('/login', userController.login);
router.post('/register_login', userController.register_login);
//router.get('/auth/twitter', userController.twitter_login);
//router.get('/auth/twitter/callback', userController.auth_twitter_callback);
router.get('/isLoggedIn', userController.isLoggedIn);
router.delete('/logout', userController.logoutUser);
router.get('/userstatus', userController.isLoggedIn);
router.post('/verify', userController.verify)

router.get('/auth/twitter',
  passport.authenticate('twitter'));

router.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;