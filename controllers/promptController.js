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

module.exports = { getAllPrompts }