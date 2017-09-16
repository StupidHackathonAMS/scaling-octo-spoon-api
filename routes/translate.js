var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    res.send('test')
});

router.post('/', function (req, res) {
    var j = req.body;
    var back = {cookies: []};

    for(var i = 0; i < j.cookies.length; i++){
        var cook = j.cookies[i];
        cook.deeg += " :P";
        back.cookies.push({id: cook.id, deeg: cook.deeg});
    }

    res.json(back)
});

module.exports = router;