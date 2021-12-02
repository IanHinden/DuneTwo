const express = require("express");
router = express.Router();
postsController = require("../controllers/postsController");

router.post('/createPost', postsController.createPost);
router.get('/posts', postsController.getAllPosts);

module.exports = router;