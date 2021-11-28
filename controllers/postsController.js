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

module.exports = { getAllPosts }