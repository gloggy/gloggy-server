// Depdendencies
var fs = require('fs');
var path = require('path');

// Local vars
var routes = {}, args;

var readError = function(err) {
  console.error(err);
}

var readComplete = function(files) {
  var indexPos, routesDir, i, length;

  // Drop "index.js"
  indexPos = files.indexOf('index.js');
  if (indexPos !== -1) {
    files.splice(indexPos, 1);
  }

  for(i = 0, length = files.length; i < length; i++) {
    var filename = path.join(__dirname, files[i]);
    console.log('require "' + filename + '"');
    routes[files[i]] = require(filename).call(null, args);
  }
}

var initialize = function(argv) {
  args = argv || [];

  fs.readdir(path.dirname(module.filename), function(err, files){
    if(err) {
      readError(err);
    } else {
      readComplete(files);
    }
  });
};

module.exports = {
  init: initialize
};
