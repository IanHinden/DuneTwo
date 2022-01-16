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

const votePrompt = async (req, res) => {
    try {
        const prompt = await promptModel.findById(req.body.promptId);
        if(req.body.choice == 0){
            if (!prompt.aLikes.includes(req.user._id)) {
                await prompt.updateOne({ $push: {aLikes: req.user._id}, $inc: { aVotes: 1 } });
            }
            
            if (prompt.bLikes.includes(req.user._id)){
                await prompt.updateOne({ $pull: {bLikes: req.user._id}, $inc: { bVotes: -1 } });
            }

            res.status(200).json({"Updated": true});
        } else if (req.body.choice == 1) {
            if (prompt.aLikes.includes(req.user._id)) {
                await prompt.updateOne({ $pull: {aLikes: req.user._id}, $inc: { aVotes: -1 } });
            }
            
            if (!prompt.bLikes.includes(req.user._id)){
                await prompt.updateOne({ $push: {bLikes: req.user._id}, $inc: { bVotes: 1 } });
            }

            res.status(200).json({"Updated": true});
        }
    } catch (err) {
            res.status(500).json(err);
    }
}

module.exports = { getAllPrompts, getLatestPrompt, votePrompt }