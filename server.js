var mongoose = require('mongoose');
var express = require('express');

var app = express();
mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;
	
	
	app.listen(3000,function(){
		console.log('now listen on http://localhost:3000');
	});
	app.get('/',function(req,res){
		res.send('hello word');
	});
});