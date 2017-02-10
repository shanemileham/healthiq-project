require('./bootstrap.test.js');

describe('calculateBloodSugar', () => {
  let calculateBloodSugar = require('../lib/calculateBloodSugar.js');

  it('should return an array of the length given plus one', () => {
    let array = new Array(1440).fill(0);
    calculateBloodSugar(array).length.should.equal(1441);
  });

  it('should start at blood sugar of 80', () => {
    let array = new Array(10).fill(1);
    calculateBloodSugar(array)[0].should.equal(80);
  });

  it('should correctly calculate blood sugar under influence (nonzero)', () => {
    let array = new Array(60).fill(1);
    let bloodSugar = calculateBloodSugar(array);
    bloodSugar.forEach((element, index) => {
      element.should.equal(80 + index);
    });
  });

  it('should correctly calculate blood sugar with zero influence', () => {
    let array = new Array(60).fill(0);
    array[0] = 1;
    let bloodSugar = calculateBloodSugar(array);
    bloodSugar.forEach((element, index) => {
      if (index === 0) {
        element.should.equal(80);
      } else {
        element.should.equal(81);
      }
    });
  });

  it('should correctly calculate blood sugar with undefined influence');
});
