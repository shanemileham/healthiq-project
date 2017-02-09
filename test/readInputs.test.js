require('./bootstrap.test.js');

describe('readInputs', () => {
  let readInputs = require('../lib/readInputs.js');

  it('should return a rejected promise if the input is undefined', () => {
    readInputs(undefined)
    .then(() => {
      assert.fail('readInputs should reject undefined input');
    })
    .catch((error) => {
      error.should.equal('Input is undefined');
    });
  });

  it('should read a valid input correctly', sinon.test(() => {
    let data = `[
      {
        "type": "exercise",
        "id": 3,
        "time": 420
      }
    ]`;
    let fsp = require('fs-promise');
    let fspStub = sinon.stub(fsp, 'readFile');
    fspStub.returns(Promise.resolve(data));

    readInputs('exampleInput.json')
    .then((output) => {
      output.toString().should.equal(JSON.parse(data).toString());
    })
    .catch((error) => {
      assert.fail('Error reading valid input');
    });
  }));
});
