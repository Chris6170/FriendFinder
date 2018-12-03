var friendsList = require("../data/friends.js");

module.exports = function (app) {
    var obj;

    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores;

        var leastDiff = 1000;
        var bestMatchIndex = -1;

        for (var f = 0; f < friendsList.length; f++) {
            var fscores = friendsList[f].scores

            var currentDiffFriendLevel = 0;
            for (var i = 0; i < userScores.length; i++) {
                var currentDiffQuestionLevel = Math.abs(userScores[i] - fscores[i])
                currentDiffFriendLevel = currentDiffFriendLevel + currentDiffQuestionLevel
            }

            if (currentDiffFriendLevel < leastDiff) {
                leastDiff = currentDiffFriendLevel;
                bestMatchIndex = f;
            }
        }

        res.json(friendsList[bestMatchIndex]);
    });
}