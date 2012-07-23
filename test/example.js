var passify = require('../lib/passify');
var myPassword = passify.create();

passify.hash(myPassword, function(err, hash) {
  console.log(hash);
});
