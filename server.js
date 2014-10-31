// NPM Dependencies
var include = require('include');
var restify = require('restify');

// Project modules
// ...
var routes = include('./lib/routes');

// Vars
var port, server;

// ---
port = 3000;
server = restify.createServer();
routes.init(server);

// var foo = require('./lib/routes');
// foo.init(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
