var express = require('express');
var translate = require('google-translate-api');

var router = express.Router();

function randomI(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reverse(s){
    return s.split("").reverse().join("");
}
router.get('/', function (req, res) {
    res.send("fuck you");
});

var koekjestrommel = {};

router.post('/translate', function (req, res) {
    var cookie = req.body.cookie;

    // if(koekjestrommel.hasOwnProperty(cookie))
    //     return koekjestrommel[cookie];

    //1
    translate(cookie, {to: 'zh-TW'})
    .then(function(data){
        var iso = data.from.language.iso;
        // console.log(iso);
        // 2
        translate(data.text, {to: 'eu'})
            .then(function(data){
                //3
                translate(data.text, {to: 'af'})
                    .then(function(data){
                        // 4
                        translate(data.text, {to: 'bg'})
                            .then(function(data){
                                // 5
                                translate(data.text, {to: 'ca'})
                                    .then(function(data){
                                        // 6
                                        translate(data.text, {to: 'zh-CN'})
                                            .then(function(data){
                                                // 7
                                                translate(data.text, {to: 'gl'})
                                                    .then(function(data){
                                                        // 8
                                                        translate(data.text, {to: 'fi'})
                                                            .then(function(data){
                                                                // 9
                                                                translate(data.text, {to: 'hi'})
                                                                    .then(function(data){
                                                                        // 10
                                                                        translate(data.text, {to: iso})
                                                                            .then(function(data){
                                                                                // koekjestrommel[cookie] = data.text;
                                                                                res.json({cookie: data.text})
                                                                            }).catch(function(err) {
                                                                            console.error(err);
                                                                        });
                                                                    }).catch(function(err) {
                                                                    console.error(err);
                                                                });
                                                            }).catch(function(err) {
                                                            console.error(err);
                                                        });
                                                    }).catch(function(err) {
                                                    console.error(err);
                                                });
                                            }).catch(function(err) {
                                            console.error(err);
                                        });
                                    }).catch(function(err) {
                                    console.error(err);
                                });

                            }).catch(function(err) {
                            console.error(err);
                        });
                    }).catch(function(err) {
                    console.error(err);
                });
            }).catch(function(err) {
            console.error(err);
        });
    }).catch(function(err) {
        console.error(err);
    });
});

router.post('/reverse', function (req, res) {
    var cookie = req.body.cookie;
    var arr = cookie.split(" ");
    var s = "";
    var r = randomI(1, arr.length);

    for(var i = 0; i < arr.length; i++){
        if(i % r === 0){
            arr[i] = reverse(arr[i] )
        }

        s += arr[i] + " ";
    }
    res.json({cookie: s})
});

module.exports = router;