
var include = require('include');
var restify = require('restify');

var port = 3000;

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
};

var server = restify.createServer();

var foo = require('./lib/routes');
foo.init(server);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});

