const mongoose = require('mongoose');

const tokenSchema = {
    userId: { type: String, required: true },
    token: { type: String, required: true },
}

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;