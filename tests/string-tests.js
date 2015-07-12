var assert = require("assert")

// JSONfn must be imported to the global space
JSONfn = require('../node_modules/json-fn/jsonfn.js');

// Load the extensions
require('../extensions.js');

describe('String', function() {
  describe('String.EMPTY', function () {
    it('should return an empty string.', function () {
      assert.equal(String.EMPTY, '');
    });
  });
});
