function getUser(req, res, next) {
  res.header('Location', '/' + req.params.user + '/post');
  res.send(302);
};

function getPosts(req, res, next) {
  res.send({
    user: {
      bar: 'baz',
      foo: req.params.user + '!',
      name: 'Mister Bigglesworth'
    },
    posts: [
      {
        title: 'Test',
        slug: 'test-post',
        tags: [ 'foo', 'bar' ]
      }
    ]
  });
}

function getPost(req, res, next) {
  res.send({
    title: 'Test',
    slug: 'test-post',
    tags: [ 'foo', 'bar' ],
    body: 'This is the body of the post.'
  });
}

module.exports = {
  get: getUser,
  getPost: getPost,
  getPosts: getPosts
}
