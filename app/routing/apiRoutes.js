var friendsData = require("../data/friendsArray");

module.exports = function(app) {


app.get('api/friends', function (req, res) {
    return res.json(friendsData);
});

app.post('api/friends', function (req, res) {
 friendsArray.push(req.body);
});

};