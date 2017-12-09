var http = require('http');
// filesystem module
var fs = require('fs');

function send404Response(response) {
    // text/plain for a string
    response.writeHead(404,  {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

// callback function, doesn't "return" anything.
// caller supplies response object, method writes to it and calls end()
// in terminal start server via node server13.js
// in browser enter ip address 0.0.0.0:8888 or localhost:8888
// terminal log shows browser makes 2 requests
// A user made a request/
// A user made a request/favicon.ico
function onRequest(request, response) {
    homePath = '/'
    if (request.method == 'GET' && request.url == homePath) {
        // text/html for an html file
        response.writeHead(200,  {"Content-Type": "text/html"});
        // html file could be big, so send as a stream
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response)
    }
}

// argument onRequest is the requestListener
http.createServer(onRequest).listen(8888);
console.log("Node server is now running...");