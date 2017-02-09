require('./bootstrap.test.js');

describe('calculateInfluence', () => {
  let calculateInfluence = require('../lib/calculateInfluence.js');

  it('should return a zero-filled array when given no inputs', () => {
    let influence = calculateInfluence();
    influence.filter((element) => element !== 0).should.be.empty;
  });
});
