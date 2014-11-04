var root = require('./controllers/root');
var user = require('./controllers/user');
var hello = require('./controllers/hello');

// Map routes & controllers
function mapRoutes(server) {
  server.get('/', root.get);
  server.get('/hello/:name', hello.get);

  server.get('/:user', user.get);
  server.get('/:user/post', user.getPosts);
  server.get('/:user/post/:post', user.getPost);
}

module.exports = {
  init: mapRoutes
};
