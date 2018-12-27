/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

 // Configure the server to respond to all requests with a string
var server = http.createServer(function(req,res){

  // Get the payload,if any
  var decoder = new StringDecoder('utf-8');
  var buffer = '';
  req.on('data', function(data) {
      buffer += decoder.write(data);
  });

  req.on('end', function() {
      buffer += decoder.end();

      // Send the response
      res.end('Hello World!\n');

      // Log the request/response
      console.log('Request received with this payload: ', buffer);
  });

});

// Start the server
server.listen(4000,function(){
  console.log('The server is up and running now');
});
