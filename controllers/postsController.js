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
    const newPost = new postModel({
        title,
        content
    });

    try {
        const newerPost = newPost.save();
        res.status(201).send(newerPost);
    } catch(err) {
        res.send(err);
    }
}

module.exports = { getAllPosts, createPost }