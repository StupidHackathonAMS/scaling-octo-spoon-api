var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(parser.json());

mongoose.connect("mongodb://localhost:27017/scaling-octo-spoon", { useMongoClient: true });
console.log("connected to mongo");

var testRoute = require('./routes/test');
var translateRoute = require('./routes/translate');
var emojiRoute = require('./routes/emoji');
var wordRoute = require('./routes/wordRoute');

app.use('/test', testRoute);
app.use('/translate', translateRoute);
app.use('/emoji', emojiRoute);
app.use('/', translateRoute);
app.use('/word', wordRoute);

app.listen(3000);