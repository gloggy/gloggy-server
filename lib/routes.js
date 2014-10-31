var hello = require('./controllers/hello');

// Map routes & controllers
function mapRoutes(server) {
  server.get('/hello/:name', hello.get);
  server.get('/:name', hello.get);
}

module.exports = {
  init: mapRoutes
};
