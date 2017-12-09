var http = require('http');

function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    response.writeHead(200,  {"Context-Type": "text/plain"});
    response.write("Here is some data");
    response.end();
}

// argument onRequest is the requestListener
// browser ip address 0.0.0.0:8888
http.createServer(onRequest).listen(8888);
console.log("Node server is now running...");