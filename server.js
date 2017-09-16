var express = require('express');
var parser = require('body-parser');

var app = express();

app.use(parser.json());

var testRoute = require('./routes/test');
var translateRoute = require('./routes/translate');

app.use('/test', testRoute);
app.use('/', translateRoute);

app.listen(3001);