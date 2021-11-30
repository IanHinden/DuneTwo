const express = require("express");
router = express.Router();
routesController = require("../controllers/postsController");

router.post('/createPost', routesController.createPost);
router.get('/posts', routesController.getAllPosts);

module.exports = router;