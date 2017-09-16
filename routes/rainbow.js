var express = require('express');

var router = express.Router();

var colors = [
    "#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",
];

router.get('/', function (req, res) {
});

router.post('/', async function (req, res) {
    var cookie = req.body.cookie;
    var arr = cookie.split(" ");
    var s = "";
    var colorcount = 0;

    for(var i = 0; i < arr.length; i++){
        for(var a = 0; a < arr[i].length; a++){
            s += "<span style=\"color: "+ colors[colorcount] +"; font-family: 'Comic Sans MS'\">" + arr[i][a] +"</span>"

            if(colorcount < colors.length - 1){
                colorcount++;
            }
            else {
                colorcount = 0;
            }
        }
        s += " ";
    }

    res.json({cookie: s});
});

module.exports = router;