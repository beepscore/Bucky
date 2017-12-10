// "Connect is an extensible HTTP server framework for node using "plugins" known as middleware."
// https://github.com/senchalabs/connect
var connect = require('connect');

var http = require('http');

var app = connect();

http.createServer(app).listen(8888);
console.log("Server is running...");
