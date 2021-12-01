const mongoose = require('mongoose');

const promptSchema = {
    prompt: String,
    aChoice: String,
    bChoice: String,
    aVotes: Number,
    bVotes: Number
}

const Prompt = mongoose.model("Prompt", promptSchema);

module.exports = Prompt;