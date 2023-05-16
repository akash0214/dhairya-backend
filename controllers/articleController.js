const articles = require('../data/articles');

exports.getArticle = async (req, res) => {
    try {
        const index = Math.floor(Math.random() * articles.length);
        const article = articles[index];
        res.status(200).json({
            article: article,
            message: "Fetched the article successfully !!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the article !!",
        })
    }
}