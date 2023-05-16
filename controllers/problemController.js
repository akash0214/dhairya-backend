const problems = require('../data/problemsofSmoking');

exports.getProblem = async (req, res) => {
    try {
        const index = Math.floor(Math.random() * problems.length);
        const problem = problems[index];
        res.status(200).json({
            problem: problem,
            message: "Fetched the problem successfully",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error in fetching the problem !!",
        })
    }
}