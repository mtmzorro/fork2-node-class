var Class = require('./index.js');

Foo = Class({
  initialize: function(a,b) {
    this.a = a;
    this.b = b;
  },

  getA: function() {
    return this.a;
  },

  getB: function() {
    return this.b;
  }
});

var foo = new Foo(1, 2);