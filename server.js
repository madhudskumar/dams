var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set(express.static(__dirname + '/vendors'))

app.get('*' , function (req,res) {
	res.render('index');
});

var port = process.env.NODE || 7777;

console.log('server : 7777');
app.listen(port);
