var fs = require('fs');
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function (app) {
    var obj; 

    app.get("/api/friends", function (req, res) {
        fs.readFile(path.join(__dirname, "../data/friends.js"), 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
        });
        return res.json(obj);
    });

    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;

    });

    /*
            // Using a RegEx Pattern to remove spaces from newCharacter
            // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
            newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
          
            console.log(newcharacter);
          
            characters.push(newcharacter);
          
            res.json(newcharacter);
          });
    */
}