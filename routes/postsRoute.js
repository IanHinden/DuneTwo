const express = require("express");
router = express.Router();
postsRoute = require("../controllers/postsController");

router.get("/", postsRoute.postsController)

module.exports = router;