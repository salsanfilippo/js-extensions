var assert = require("assert")

// JSONfn must be imported to the global space
JSONfn = require('../node_modules/json-fn/jsonfn.js');

// Load the extensions
require('../extensions.js');

describe('Object', function() {
  describe('Object.clone', function () {
    it('should make an exact copy of an object.', function () {
      var obj = { "foo": "bar", "bar": "baz" };
      var obj2 = Object.clone(obj);

      assert.equal(JSONfn.stringify(obj), JSONfn.stringify(obj2));
    });
  });
});

describe('Object', function() {
  describe('Object.equals', function () {
    it('should correctly compare two objects.', function () {
      var obj = { "foo": "bar", "bar": "baz" };
      var obj2 = { "foo": "bar", "bar": "baz" };

      assert.equal(Object.equals(obj, obj2), true);
      assert.equal(Object.equals('abc', 'abc'), true);
      assert.equal(Object.equals('abc', 'def'), false);
      assert.equal(Object.equals('5', '5'), true);
      assert.equal(Object.equals(5, 10), false);
    });
  });
});

describe('Object', function() {
  describe('Object.hashCode', function () {
    it('should create a hashcode for an object.', function () {
      var obj = { "foo": "bar", "bar": "baz" };
      var obj2 = { "foo": "bar", "bar": "baz" };

      assert.equal(Object.hashCode(obj), Object.hashCode(obj2));
      assert.notEqual(Object.hashCode(obj), Object.hashCode({"foo": "bar"}));
      assert.equal(Object.hashCode('abc'), Object.hashCode('abc'));
      assert.notEqual(Object.hashCode('abc'), Object.hashCode('def'));
    });
  });
});

describe('Object', function() {
  describe('Object.isNullOrUndefined', function () {
    it('should determine if an object is null or undefined.', function () {
      var obj = { "foo": "bar", "bar": "baz" };
      var obj2 = null;
      var obj3;

      assert.equal(Object.isNullOrUndefined(obj), false);
      assert.equal(Object.isNullOrUndefined(obj2), true);
      assert.equal(Object.isNullOrUndefined(obj3), true);
      assert.equal(Object.isNullOrUndefined('abc'), false);
    });
  });
});
