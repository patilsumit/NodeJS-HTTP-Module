//Import HTTP Module
const http = require('http');

//Create a HTTP Server
const server = http.createServer(function(req, res) {

    // Send Hello World as a response
    res.write("Hello World");
    // End the response. Sending message is complete
    res.end(); 
});

//Listen on port
server.listen(3000);
console.log("Listening on port 3000...");
