require('./bootstrap.test.js');

describe('lookupIndex', () => {
  let lookupIndex = require('../lib/lookupIndex.js');

  let sandbox;
  beforeEach(() => {
      sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
      sandbox.restore();
  });

  it('should not add anything if there are no inputs', () => {
    let inputs = [];

    return lookupIndex(inputs)
    .then((augmented) => {
      augmented.should.be.empty;
    });
  });

  it('should correctly add a food index', () => {
    let inputs = [
      {
        'type': 'food',
        'id': 0,
      },
    ];
    const INDEX = 1337;
    let data = [
      {
        'index': INDEX,
      },
    ];

    let fsp = require('fs-promise');
    let fspStub = sandbox.stub(fsp, 'readFile');
    fspStub.returns(Promise.resolve(JSON.stringify(data)));

    return lookupIndex(inputs)
    .then((augmented) => {
      inputs.index = INDEX;
      augmented.toString().should.equal(inputs.toString());
    });
  });

  it('should correctly add an exercise index', () => {
    let inputs = [
      {
        'type': 'exercise',
        'id': 0,
      },
    ];
    const INDEX = 1337;
    let data = [
      {
        'index': INDEX,
      },
    ];

    let fsp = require('fs-promise');
    let fspStub = sandbox.stub(fsp, 'readFile');
    fspStub.returns(Promise.resolve(JSON.stringify(data)));

    return lookupIndex(inputs)
    .then((augmented) => {
      inputs[0].index = INDEX;
      augmented.toString().should.equal(inputs.toString());
    });
  });

  it('should correctly add a mix of food and exercise indices', () => {
    let inputs = [
      {
        'type': 'exercise',
        'id': 0,
      },
      {
        'type': 'food',
        'id': 1,
      },
    ];
    const EXERCISE_INDEX = 1;
    const FOOD_INDEX = 2;
    let data = [
      {
        'index': EXERCISE_INDEX,
      },
      {
        'index': FOOD_INDEX,
      },
    ];

    let fsp = require('fs-promise');
    let fspStub = sandbox.stub(fsp, 'readFile');
    fspStub.returns(Promise.resolve(JSON.stringify(data)));

    return lookupIndex(inputs)
    .then((augmented) => {
      inputs[0].index = EXERCISE_INDEX;
      inputs[1].index = FOOD_INDEX;
      augmented.toString().should.equal(inputs.toString());
    });
  });
});
