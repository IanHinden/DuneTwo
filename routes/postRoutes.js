const express = require("express");
router = express.Router();

const auth = require('../middleware/auth');

postsController = require("../controllers/postsController");

router.post('/createPost', auth, postsController.createPost);
router.get('/posts', postsController.getAllPosts);
router.post('/vote', auth, postsController.votePost)

module.exports = router;