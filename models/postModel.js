const mongoose = require('mongoose');

const postSchema = {
    title: String,
    content: String,
    votes: Number
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;