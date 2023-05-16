const remedies = require('../data/domesticRemedies');

exports.getRemedy = async (req, res) => {
    try {
        const index = Math.floor(Math.random() * remedies.length);
        const remedy = remedies[index];
        res.status(200).json({
            remedy: remedy,
            message: "Fetched remedy successfully !!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the remedy !!",
        })
    }
}