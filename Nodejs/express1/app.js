var express = require('express');
var app=express();


app.set('view engine','ejs');
//app.set('views',__dirname + '/views'); //here __dirname is a global variable where app.js resides . "/views" can be replaced by any other folder for the render command to take from

app.locals.pagetitle="Srinivas check this out"; // we can now use this pagetitle in any webpage like a variable

var routes = require('./routes');

app.get('/',routes.index);
app.get('/about',routes.about);


app.get('*',function(req,res){
	//	var name=req.params.name;
	//	var title = req.params.title;
res.send('Bad Route');
});
var server= app.listen(3000,function() {
	console.log('Listening on localhost 3000');

		});
