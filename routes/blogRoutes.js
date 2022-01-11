const express = require("express");
router = express.Router();

const auth = require('../middleware/auth');

blogsController = require("../controllers/blogsController");

router.post('/createBlog', blogsController.createBlog);
router.get('/latestblog', blogsController.getLatestBlog);
router.get('/blogs', blogsController.getAllBlogs);

module.exports = router;