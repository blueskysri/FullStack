var http = require('http'); // add the http module
var myServer = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type" : "text/html" }); // 400 - no page found 200- found
response.write("<b>Hello</b> World");
response.end();	
		});//create a server

myServer.listen(3000);

console.log("Got to http://localhost:3000 on your borwser")
