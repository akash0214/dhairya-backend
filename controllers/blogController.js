const blogs = require('../data/blogsofExSmokers');

exports.getBlog = async(req, res) => {
    try {
        const index = Math.floor(Math.random() * blogs.length);
        const blog = blogs[index];
        res.status(200).json({
            blog: blog,
            message: "Fetched a blog",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the blog !!",
        })        
    }
}