var express = require('express');

var emojiindex = require('./emojindex');

var emojidick = [
    ["good", "thumbsup"],
    ["goed", "thumbsup"],
    ["bad", "thumbsdown"],
    ["slecht", "thumbsdown"],
    ["up", "thumbsdown"]
];
var router = express.Router();

function makeImg(emojicode){
    return "<img src='"+emojiindex[emojicode]+"' style='height: 1em;'/>"
}

router.post("/", function(req, res){
    var cookie = req.body.cookie;

    emojidick.forEach(function (emojitranslater){
        cookie = cookie.replace(emojitranslater[0], makeImg(emojitranslater[1]))
    });

    res.json({cookie: cookie})
});

module.exports = router;