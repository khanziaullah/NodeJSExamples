var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello, world!');
});

var server = app.listen(3000, function(req, res){
    console.log('server running at http://127.0.0.1:3000/');
});