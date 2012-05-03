var passify = require('passify');

describe('Passify', function() {
  describe('Create', function() {
    var passwordDefault = passify.create();
    var passwordCustom = passify.create(11);

    it('should result in an 8 character [0-9][A-Z][a-z] string', function() {
      passwordDefault.length.should.equal(8);
    });
    it('should result in an 11 character [0-9][A-Z][a-z] string', function() {
      passwordCustom.length.should.equal(11);
    });
  });

  describe('Hash', function() {
    it('should create a hash for the password "secret".', function(cb) {
      passify.hash('secret', function(err, hash) {
        hash.should.be.ok;
        cb();
      });
    });
  });

  describe('Compare', function() {
    it('should return false when comparing a password to a wrong hash.', function(cb) {
      passify.compare('secret', '123', function(err, bool) {
        bool.should.be.false;
        cb();
      });
    });
  });
});
