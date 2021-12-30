const mongoose = require('mongoose');

const postSchema = {
    title: String,
    content: String,
    votes: Number,
    userId: String
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;