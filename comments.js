// create web server with Node.js
// run with: node comments.js
// then visit: http://localhost:3000/comments

// load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// create http server
http.createServer(function (req, res) {
  // content header
  res.writeHead(200, {'content-type': 'text/html'});
  
  // incase of POST request
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var POST = qs.parse(body);
      console.log(POST);
    });
  }
  
  // incase of GET request
  if (req.method == 'GET') {
    var url_parts = url.parse(req.url, true);
    console.log(url_parts.query);
  }

  // write body of response
  res.end('<html><body><h1>Hello, World!</h1></body></html>');

}).listen(3000); // listen for connections on this port
console.log('Server running at http://

