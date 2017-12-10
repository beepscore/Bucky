// "Connect is an extensible HTTP server framework for node using "plugins" known as middleware."
// https://github.com/senchalabs/connect
var connect = require('connect');

var http = require('http');

var app = connect();

function profile(request, response, next) {
    console.log('User requested profile');
    // use next method on the stack
    next();
}

function forum(request, response, next) {
    console.log('User requested forum');
    next();
}

// use middleware in a stack
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...");
