# <a href="#passify" name="passify">Passify</a> [![Build Status](https://secure.travis-ci.org/nickjj/disco.png?branch=master)](http://travis-ci.org/nickjj/passify)

A small utility to create a password and wrap bcrypt.

## Installation

    $ npm install passify

## Usage

There are only 3 methods:

- create
- hash
- compare

### Create

    var foo = passify.create();
    console.log(foo);
    // 8 character password which is the default.
    
    var bar = passify.create(16);
    console.log(bar);
    // 16 character password because we optionally set 16.

### Hash

    passify.hash('secretpassword', function(err, hash) {
      console.log(hash);
      // the hashed result.
    });

### Compare

    passify.compare('123', 'hashed-version-of-123-would-actually-be-here', function(err, bool) {
      console.log(bool);
      // did they match? true or false.
    });

## Test
    $ git clone https://github.com/nickjj/passify.git
    $ cd passify
    $ make test
