var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

var cats = require('./cats.js')(app);

var server = app.listen(3000, function(req, res){
    console.log('server running at http://127.0.0.1:3000/');
});