/** Function which writes to file the blood sugar and glycation arrays
* @param {array} bloodSugar The blood sugar array
* @param {array} glycation The glycation array
* @param {string} fileName The name of the file to write
* @return {promise} A promise which resolves true if the write is successful
*/
function output(bloodSugar, glycation, fileName) {
  // Error checking
  if (fileName === undefined) {
    return Promise.reject('Input is undefined');
  }

  let fsp = require('fs-promise');

  let data = 'time\tbloodSugar\tglycation';
  for (let i = 0; i < 1441; i++) {
    data += `\n${i}\t${bloodSugar[i]}\t${glycation[i]}`;
  }

  return fsp.writeFile(fileName, data)
  .then(() => {
    console.log('Successfully outputted the blood sugar and glycation arrays');
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = output;
