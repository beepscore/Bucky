var http = require('http');

// callback function, doesn't "return" anything.
// caller supplies response object, method writes to it and calls end()
// in terminal start server via node server13.js
// in browser enter ip address 0.0.0.0:8888 or localhost:8888
// terminal log shows browser makes 2 requests
// A user made a request/
// A user made a request/favicon.ico
function onRequest(request, response) {

    console.log("A user made a request" + request.url);

    response.writeHead(200,  {"Context-Type": "text/plain"});
    response.write("Here is some data");
    response.end();
}

// argument onRequest is the requestListener
http.createServer(onRequest).listen(8888);
console.log("Node server is now running...");