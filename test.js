const assert = require('chai').assert;
const stringLength = require('./app.js');

describe('stringLength', function() {
    it('should return the length of the string', function() {
        assert.equal(stringLength('hello'), 5);
    });
});
