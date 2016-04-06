var http = require('http');

//create web server
http.createServer(function (request, response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write("Header\n");
	router.home(request,response);
	router.user(request,response);
	response.end('footer\n');
}).listen(3000, '127.0.0.1');

//require router file
var router = require("./router.js");



console.log('Server running at http://127.0.0.1:3000/');