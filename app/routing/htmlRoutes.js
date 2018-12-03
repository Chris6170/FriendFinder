var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get('/img/:friendpic', function (req, res) {
        var friendpic = req.params.friendpic;
        res.sendFile(path.join(__dirname, "../public/img/" + friendpic));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}