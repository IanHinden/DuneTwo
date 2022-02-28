const postModel = require('../models/postModel');

const getAllPosts = (req, res) => {
    postModel.find((err, data) => {
        if(err){
            console.log(err)
        } else {
            req.data = data;
            res.send(req.data);
        }
    })
}

const createPost = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.user._id.toString();
    const support = req.body.support;
    const votes = 0;
    const newPost = new postModel({
        title,
        content,
        votes,
        userId,
        support
    });

    try {
        const newerPost = newPost.save();
        res.status(201).send(newerPost);
    } catch(err) {
        res.send(err);
    }
}

const votePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.body.postId);
        if (!post.likes.includes(req.user._id)) {
            await post.updateOne({ $push: {likes: req.user._id}, $inc: { votes: 1 } });
            res.status(200).json({"Liked": true});
        } else {
            await post.updateOne({ $pull: {likes: req.user._id}, $inc: { votes: -1 } });
            res.status(200).json({"Liked": false});
        }
    } catch (err) {
            res.status(500).json(err);
    }
}

module.exports = { getAllPosts, createPost, votePost }