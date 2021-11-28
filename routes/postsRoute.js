const express = require("express");
router = express.Router();
routesController = require("../controllers/postsController");
const Post = require('../models/postModel');

//router.get("/", postsRoute.postsController)
router.route('/createPost').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newPost = new Post({
        title,
        content
    });

    try {
        const newerPost = newPost.save();
        res.status(201).send(newerPost);
    } catch(err) {
        res.send(err);
    }
    //res.send('Item Saved');
})

router.get('/posts', routesController.getAllPosts);

module.exports = router;