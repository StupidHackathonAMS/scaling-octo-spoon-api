var express = require('express');

var router = express.Router();

router.get("/", function(requ, resp){
    res.json({cookie: "EMOIJIES!"})
});

module.exports = router;