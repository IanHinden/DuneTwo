const promptModel = require('../models/promptModel');

const getAllPrompts = (req, res) => {
    promptModel.find((err, data) => {
        if(err){
            console.log(err)
        } else {
            req.data = data;
            res.send(req.data);
        }
    })
}

const getLatestPrompt = (req, res) => {
    promptModel.findOne().sort({$natural: -1}).limit(1).exec(function(err, data){
        if(err){
            console.log(err);
            res.status(400).send("There was an error");
        }
        else{
            res.status(200).send(data);
        }
    })
}

module.exports = { getAllPrompts, getLatestPrompt }