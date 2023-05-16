const stories = require('../data/storiesOfExSmokers');

exports.getStory = async (req, res) => {
    try {
        const index = Math.floor(Math.random() * stories.length);
        const story = stories[index];
        res.status(200).json({
            story: story,
            message: "Fetched story successfully !!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the story !!",
        })
    }
}