function getRoot(req, res, next) {
  res.send("Hi friend!");
}

module.exports = {
  get: getRoot
};
