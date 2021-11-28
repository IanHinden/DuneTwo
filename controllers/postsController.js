const getAllPosts = (req, res) => {
    res.json({
        postsList: ["post 1", "post 2"]
    })
}

module.exports = { getAllPosts }