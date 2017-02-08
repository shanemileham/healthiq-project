/** Function which reads input JSON file
* @param {string} fileName The file to read
* @return {promise} The parsed JSON object
*/
function readInputs(fileName) {
  console.log(fileName);
  // Error checking
  if (fileName === undefined) {
    return Promise.reject('Input is undefined');
  }

  let fsp = require('fs-promise');

  return fsp.readFile(fileName, 'utf8')
  .then(function(data) {
    let obj = JSON.parse(data);
    return obj;
  });
}

module.exports = readInputs;
