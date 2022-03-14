const mongoose = require('mongoose');

const postSchema = {
    content: String,
    support: String,
    votes: Number,
    userId: String,
    likes: Array
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;