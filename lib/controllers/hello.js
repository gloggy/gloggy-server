function getHello(req, res, next) {
  var message = {};
  message.body = 'hello ' + req.params.name;

  res.send(message);
};

module.exports = {
  get: getHello
}