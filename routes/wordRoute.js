var express = require('express');
var word = require('./schemas/word');

var router = express.Router();

router.get('/', function (req, res) {
    word.find({}, function (err, data) {
        if(err) console.error(err);
        else {
            console.log(data);
            res.send(data);
        }
    })
});

router.post('/', async function (req, res) {
    var cookie = req.body.cookie;
    // var arr = cookie.split(" ");
    // var s = "";

    // for(var i = 0; i < arr.length; i++){

        var data = await word.find({}).exec(); //, function (err, data) {

        data.forEach(function (item){
            cookie = cookie.replace(item.in, item.out)
        });

        // if(data[0]){
        //     console.log(data[0]);
        //     arr[i] = data[0].out;
        // }

        // s += arr[i] + " ";
    // }
    res.json({cookie: cookie});
});

router.post('/new', function (req, res) {
    var w = new word(req.body);
    w.save(function (err, data) {
        if(err)res.send(err);
        else {
            console.log(data);
            res.send("success")
        }
    })
});


module.exports = router;