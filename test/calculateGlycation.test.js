require('./bootstrap.test.js');

describe('calculateGlycation', () => {
  let calculateGlycation = require('../lib/calculateGlycation.js');

  it('should not increment for bloodSugar levels less than 150', () => {
    // Create a random array of integers between 0 inclusive and 150 exclusive
    let input = new Array(50).fill(0).map(() => {
      return Math.random() * 150;
    });
    let glycation = calculateGlycation(input);
    glycation.filter((element) => element !== 0).should.be.empty;
  });

  it('should output an increasing glycation array', () => {
    // Create a random array of integers between 0 inclusive and 300 exclusive
    let input = new Array(50).fill(0).map(() => {
      return Math.random() * 300;
    });
    let glycation = calculateGlycation(input);
    for (let i = 1; i < glycation.length; i++) {
      glycation[i].should.be.at.least(glycation[i-1]);
    }
  });

  it('should end up with total glycation equal to the minutes over 150', () => {
    // Create a random array of integers between 0 inclusive and 300 exclusive
    let input = new Array(50).fill(0).map(() => {
      return Math.random() * 300;
    });
    let glycation = calculateGlycation(input);
    input.filter((element) => element > 150).length
    .should.equal(glycation[glycation.length-1]);
  });
});
