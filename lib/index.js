// Solution Steps
let readFile = require('./readFile.js');
let lookupIndex = require('./lookupIndex.js');
let calculateInfluence = require('./calculateInfluence.js');
let calculateBloodSugar = require('./calculateBloodSugar.js');
let calculateGlycation = require('./calculateGlycation.js');
let output = require('./output.js');

// 1. Read inputs (Assume they are well-formed)
let fileName = process.argv[2];
console.log('Reading from: ' + fileName);
readFile(fileName)
.then(function(file) {
  // console.log(file);

// 2. Lookup exercise or glycemic index from DB and add to input object
  return lookupIndex(file);
})
.then(function(inputs) {
  // console.log(inputs);

// 3. Convert inputs to influence array (which represents the influence of food
//    or exercise on blood sugar based on time of the day)
  let influence = calculateInfluence(inputs);
  // console.log(influence);

// 4. Create blood sugar array from influence array (using the above rules of
//   food, exercise, and normalization)
  let bloodSugar = calculateBloodSugar(influence);
  // console.log(bloodSugar);

// 5. Create a glycation array from blood sugar array (using the above rule of
//    glycation)
  let glycation = calculateGlycation(bloodSugar);
  // console.log(glycation);
  // console.log(glycation[glycation.length - 1]);

// 6. Output blood sugar and glycation arrays
  return output(bloodSugar, glycation, 'output.tsv');
})
.then(() => {
  // Open web page graph
  let exec = require('child_process').exec;
  let cmd = 'open http://127.0.0.1:8080/output.html';

  exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
  });
})

// Catch errors
.catch(function(error) {
  console.log(error);
});
