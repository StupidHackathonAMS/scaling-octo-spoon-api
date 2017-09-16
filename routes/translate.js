var express = require('express');
var translate = require('google-translate-api');

var router = express.Router();

router.get('/', function (req, res) {
    //
    // api.translate({
    //     source: 'en',
    //     target:'zh-TW',
    //     text:'How the Kim dynasty has shaped North Korea'
    // }, function(err,translation){
    //
    //     console.log(translation);
    //     res.send("test")
    //     // translation is a string representing the output translation
    //     // original response would be in html, this client converts the html to a proper text string
    // });
});

router.post('/', function (req, res) {
    var cookie = req.body.cookie;

    //1
    translate(cookie, {to: 'zh-TW'})
    .then(function(data){
        var iso = data.from.language.iso;
        console.log(iso);
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



module.exports = router;