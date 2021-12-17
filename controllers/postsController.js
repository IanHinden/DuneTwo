const postModel = require('../models/postModel');

const getAllPosts = (req, res) => {
    console.log(req.user);
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
    const votes = 0;
    const newPost = new postModel({
        title,
        content,
        votes
    });

    try {
        const newerPost = newPost.save();
        res.status(201).send(newerPost);
    } catch(err) {
        res.send(err);
    }
}

const votePost = (req, res) => {
    postModel.findOneAndUpdate({ _id: req.body.postId }, { $inc: { votes: 1 } }, {new: true },
        function(err, response) {
        if (err) {
            res.send(err);
        } else {
            res.send(req.data);
        }
    });
}

module.exports = { getAllPosts, createPost, votePost }