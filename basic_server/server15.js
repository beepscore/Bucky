// "Connect is an extensible HTTP server framework for node using "plugins" known as middleware."
// https://github.com/senchalabs/connect
var connect = require('connect');

var http = require('http');

var app = connect();

function middleware1(request, response, next) {
    console.log("Bacon");
    // use next method on the stack
    next();
}

function middleware2(request, response, next) {
    console.log("Tuna");
    next();
}

// use middleware in a stack
app.use(middleware1);
app.use(middleware2);

http.createServer(app).listen(8888);
console.log("Server is running...");
