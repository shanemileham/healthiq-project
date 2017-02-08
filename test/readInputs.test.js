require('./bootstrap.test.js');

describe('readInputs', () => {
  let readInputs = require('../lib/readInputs.js');

  it('should return a rejected promise if the input is undefined', () => {
    readInputs(undefined)
    .then(() => {
      assert.fail('words');
    })
    .catch((error) => {
      error.should.equal('Input is undefined');
    });
  });
});
