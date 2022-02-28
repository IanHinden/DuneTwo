const mongoose = require('mongoose');

const postSchema = {
    title: String,
    content: String,
    support: String,
    votes: Number,
    userId: String,
    likes: Array
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;