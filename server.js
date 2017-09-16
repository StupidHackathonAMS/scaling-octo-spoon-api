var express = require('express');
var parser = require('body-parser');

var app = express();

app.use(parser.json());

var testRoute = require('./routes/test');
var translateRoute = require('./routes/translate');
var emojiRoute = require('./routes/emoji');

app.use('/test', testRoute);
app.use('/translate', translateRoute);
app.use('/emoji', emojiRoute);

app.listen(3000);