var assert = require("assert")

// JSONfn must be imported to the global space
JSONfn = require('../node_modules/json-fn/jsonfn.js');

// Load the extensions
require('../extensions.js');

describe('Array', function() {
  describe('Object.clone', function () {
    it('should make an exact copy of an object.', function () {
      var obj = { "foo": "bar", "bar": "baz" };
      var obj2 = Object.clone(obj);

      assert.equal(JSONfn.stringify(obj), JSONfn.stringify(obj2));
    });
  });
});

