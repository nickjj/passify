var bcrypt = require("bcryptjs");
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charsLength = chars.length;

exports.create = function(length) {
  length = length || 8;
  var i = 0;
  var number;
  var random = '';

  for (i; i < length; i++) {
    number = Math.floor(Math.random() * charsLength);
    random += chars.charAt(number);
  }

  return random;
};

exports.hash = function(str, cb) {
  // genSalt defaults to 10 but it takes 115ms to run on a c2d e6420.
  // Using 5 instead results in it only taking 7ms on average.
  bcrypt.genSalt(5, function(err, salt) {
    if (err) { return cb(err); }

    bcrypt.hash(str, salt, cb);
  });
};

exports.compare = bcrypt.compare;
