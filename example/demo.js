var passify = require('../index');
var myPassword = passify.create();

passify.hash(myPassword, function(err, hash) {
  console.log(hash);
});
