require('./bootstrap.test.js');

describe('calculateInfluence', () => {
  let calculateInfluence = require('../lib/calculateInfluence.js');

  it('should return a zero-filled array when given no inputs', () => {
    let influence = calculateInfluence();
    influence.filter((element) => element !== 0).should.be.empty;
  });

  it.skip('should calculate the influence of food lasting two hours', () => {
    let input = [{
      'type': 'food',
      'index': 60,
      'time': 0,
    }];

    let influence = calculateInfluence(input);
    influence.filter((element) => element !== 0).length.should.equal(2*60);
  });

  it.skip('should calculate the influence of exercise lasting an hour', () => {
    let input = [{
      'type': 'exercise',
      'index': 60,
      'time': 0,
    }];

    let influence = calculateInfluence(input);
    influence.filter((element) => element !== 0).length.should.equal(60);
  });

  it.skip('should calculate the influence of food totalling its GI', () => {
    let input = [{
      'type': 'food',
      'index': 60,
      'time': 0,
    }];

    let influence = calculateInfluence(input);
    let sum = influence.reduce((a, b) => a + b, 0);
    sum.should.equal(60);
  });

  it.skip('should calculate the influence of exercise totalling its EI', () => {
    let input = [{
      'type': 'exercise',
      'index': 60,
      'time': 0,
    }];

    let influence = calculateInfluence(input);
    let sum = influence.reduce((a, b) => a + b, 0);
    sum.should.equal(-60);
  });

  it('should work for an example input');
});
