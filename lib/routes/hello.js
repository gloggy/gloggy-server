function hello(req, res, next) {
  var message = {};
  message.body = 'hello ' + req.params.name;

  res.send(message);
};

module.exports = function(server) {
  server.get('/hello/:name', hello);
}
