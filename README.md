# <a href="#passify" name="passify">Passify</a> [![Build Status](https://secure.travis-ci.org/nickjj/disco.png?branch=master)](http://travis-ci.org/nickjj/passify)

A small utility to create a password and wrap bcrypt.

## Installation

    $ npm install passify

## Usage

There are 3 methods which are explained below.

### Create

Create a new password. It will use [0-9][A-Z][a-z] as the character set. It only takes one argument which is the length of the password. It defaults to 8, but you can override that by supplying your own length.

    var foo = passify.create();
    console.log(foo);
    // 8 character password which is the default.
    
    var bar = passify.create(16);
    console.log(bar);
    // 16 character password because we optionally set 16.

### Hash

Hash a password using bcrypt. Supply your plain text password and then give it a callback. It will return the hashed password.

    passify.hash('secretpassword', function(err, hash) {
      console.log(hash);
      // the hashed result.
    });

### Compare

Compare a password using bcrypt. Supply your plain text password, potential hashed version of it and a callback. It will return true if the hash matches or false if it does not.

    passify.compare('123', 'hashed-version-of-123-would-actually-be-here', function(err, bool) {
      console.log(bool);
      // did they match? true or false.
    });

## Test
    $ git clone https://github.com/nickjj/passify.git
    $ cd passify
    $ make test
