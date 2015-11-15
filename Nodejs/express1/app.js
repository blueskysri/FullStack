var express = require('express');
var app=express();


app.set('view engine','ejs');
app.set('views',__dirname + '/views'); //here __dirname is a global variable where app.js resides . "/views" can be replaced by any other folder for the render command to take from

app.get('/',function(req,res){
res.render('default',{
title: 'Home',
users: ['Srinivas','Reddy','Maram','Rajesh']
});  // ejs by default renders from the views folder and we also do not need an extension here.

});
// we can add different routes . the following is a different route 
app.get('/me',function(req,res){
res.send('Hello Express with me route');
});
// we can add different routes . the following is a different route 
app.get('/who/:name?',function(req,res){
		var name=req.params.name;
res.send(name + 'Hello Express with me route');
});

app.get('/who/:name?/:title?',function(req,res){
		var name=req.params.name;
		var title = req.params.title;
res.send(name + 'Hello Express with me route '+title);
});
app.get('*',function(req,res){
	//	var name=req.params.name;
	//	var title = req.params.title;
res.send('Bad Route');
});
var server= app.listen(3000,function() {
	console.log('Listening on localhost 3000');

		});
