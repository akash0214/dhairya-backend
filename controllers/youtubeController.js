const videos = require('../data/youtubeVideos');

exports.getVideo = async (req, res) => {
    try {
        const index = Math.floor(Math.random() * videos.length);
        const video = videos[index];
        res.status(200).json({
            video: video,
            message: "Fetched video successfully !!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the video !!",
        })
    }
}