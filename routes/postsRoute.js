const express = require("express");
router = express.Router();
//postsRoute = require("../controllers/postsController");
const Post = require('../models/postModel');

//router.get("/", postsRoute.postsController)
router.route('/createPost').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newPost = new Post({
        title,
        content
    });

    newPost.save();
    res.send('Item Saved');
})

module.exports = router;