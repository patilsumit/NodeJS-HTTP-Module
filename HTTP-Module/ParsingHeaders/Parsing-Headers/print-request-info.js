/*
 * Print request info
 */

// Dependencies
var http = require('http');
var url = require('url');

function printRequestInfo(req) {
  // Parse the url
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  console.log("Path: " + path);

  var trimmedPath = path.replace(/^\/+|\/+$/g, '');
  console.log("Trimmed Path: " + trimmedPath);

  // Print query string
  var queryString = parsedUrl.query;
  console.log("Query string: ", queryString);

  // Print the http method
  var method = req.method.toLowerCase();
  console.log("Method: ", method);

  // Print the headers
  var headers = req.headers;
  console.log("Header: ", headers);
  
//   var user_agent = req.headers['user-agent'];
//   console.log(user_agent);
}

 // Configure the server to respond to all requests with a string
 var server = http.createServer(function(req,res){

    printRequestInfo(req);
  
    // Send the response
    res.end('Hello World!\n');
  });
  
 
  // Read port value from env variable
  var port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000;

   // Start the server
  server.listen(port, function(){
    console.log('The server is listening on port: ' + port);
  });
  