require('./bootstrap.test.js');

describe('readFile', () => {
  let readFile = require('../lib/readFile.js');

  it('should return a rejected promise if the input is undefined', () => {
    readFile(undefined)
    .then(() => {
      assert.fail('readFile should reject undefined input');
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

    readFile('exampleInput.json')
    .then((output) => {
      output.toString().should.equal(JSON.parse(data).toString());
    })
    .catch((error) => {
      assert.fail('Error reading valid input');
    });
  }));
});
