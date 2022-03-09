const blogModel = require('../models/blogModel');

const getAllBlogs = (req, res) => {
    blogModel.find((err, data) => {
        if(err){
            console.log(err)
        } else {
            req.data = data;
            res.send(req.data);
        }
    })
}

const createBlog = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newBlog = new blogModel({
        title,
        content,
    });

    try {
        const newerBlog = newBlog.save();
        res.status(201).send(newerBlog);
    } catch(err) {
        res.send(err);
    }
}

const getBlog = async (req, res) => {
    try {
        const prompt = await blogModel.findById(req.params.blogId);
        res.status(200).json({"Data": prompt});
    } catch (err) {
        res.status(500).json(err);
    }
}

const getLatestBlog = (req, res) => {
    blogModel.findOne().sort({$natural: -1}).limit(1).exec(function(err, data){
        if(err){
            console.log(err);
            res.status(400).send("There was an error");
        }
        else{
            res.status(200).send(data);
        }
    })
}

module.exports = { getAllBlogs, getLatestBlog, createBlog, getBlog }