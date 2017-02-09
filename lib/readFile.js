/** Function which reads JSON file and outputs the object
* @param {string} fileName The file to read
* @return {promise} The parsed JSON object
*/
function readJSON(fileName) {
  // Error checking
  if (fileName === undefined) {
    return Promise.reject('Input is undefined');
  }

  let fsp = require('fs-promise');

  return fsp.readFile(fileName, 'utf8')
  .then(function(data) {
    return JSON.parse(data);
  });
}

module.exports = readJSON;
