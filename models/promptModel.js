const mongoose = require('mongoose');

const promptSchema = mongoose.Schema({
    prompt: String,
    aChoice: String,
    bChoice: String,
    aVotes: Number,
    bVotes: Number,
    aLikes: Array,
    bLikes: Array
},
    {timestamps: true}
);

const Prompt = mongoose.model("Prompt", promptSchema);

module.exports = Prompt;