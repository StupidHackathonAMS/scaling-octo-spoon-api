var express = require('express');

var emojiindex = require('./emojindex');

var emojidick = [
    ["good", "thumbsup"],
    ["goed", "thumbsup"],
    ["bad", "thumbsdown"],
    ["slecht", "thumbsdown"],
    ["omhoog", "up"],
    ["vraag", "question"],
    ["hey", "handshake"],
    ["moeilijk", "cry"],
    ["er straks", "soon"],
    ["voor te stellen", "thought_balloon"],
    ["niet meer ben", "skull_and_crossbones"],
    ["Trump", "devil"],
    ["trump", "devil"],
    ["Friday", "fried_egg birthday"],
    ["white supremacists ", "whitedude"],
    ["tweet", "twitter"],
    ["Bomb", "bomb"],
    ["morning", "sunrise"],
    ["ground", "earth_africa"],
    ["hard", "earth_africa"],
    ["Muslim", "muslima"],
    ["countries", "japan"],
    ["wrote", "pencil"],
    ["ban", "crossed_swords"],
    ["scene", "framed_picture"],

];
var router = express.Router();

function makeImg(emojicode){
    return "<img src='"+emojiindex[emojicode]+"' style='height: 1em; display: inline-block; width: auto !important'/>"
}

router.post("/", function(req, res){
    var cookie = req.body.cookie;

    Object.keys(emojiindex).forEach(function (key) {
        if(key.length <= 3)
            return;
        cookie = cookie.replace(key, makeImg(key));
    });

    emojidick.forEach(function (emojitranslater){
        cookie = cookie.replace(emojitranslater[0], makeImg(emojitranslater[1]))
    });



    res.json({cookie: cookie})
});

module.exports = router;