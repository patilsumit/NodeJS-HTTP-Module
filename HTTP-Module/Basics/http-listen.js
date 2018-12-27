/* Title: Create http server to listen for http connection
 * Description: Create a http server using http.createServer function
 * Listern on port 3000 and prints a message when a client connects
 * Run: node http-listen.js
 * URL: http://localhost:3000
 * Note: We are not sending any response to client. Use ctrl-c to terminate the node app
 */

//Import http module
const http = require('http');

//Create a HTTP Server instance
const server = http.createServer();

//Register a listener on TCP connection
server.on('connection', function() {
    console.log("Client connected...")
});

//Listen on port
server.listen(3000);
console.log("Listening on port 3000...");
