const mongoose = require('mongoose');

const userSchema = {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: {type: Boolean, default: false}
}

const User = mongoose.model("User", userSchema);

module.exports = User;