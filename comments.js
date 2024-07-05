// Create web server
// 1. Create a web server
// 2. Create a server object
// 3. Run the server

// 1. Create a web server
var http = require('http');

// 2. Create a server object
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// 3. Run the server
server.listen(3000, ' localhost');