var express = require('express');

var router = express.Router();
const translate = require('google-translate-api');

// router.get('/', function (req, res) {
//     res.send("yolo")
// });

router.get('/', function (req, res) {
    translate('I speak english very well', {to: 'zh-TW'})
    .then(function(data){
        console.log(data.text);
        //=> I speak English
        console.log(data.from.language.iso);
        res.send("fuck you")
        //=> nl
    }).catch(function(err) {
            console.error(err);
    });
});


module.exports = router;