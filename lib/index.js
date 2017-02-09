// Solution Steps

// 1. Read inputs (Assume they are well-formed)
let readInputs = require('./readInputs.js');
let fileName = process.argv[2];
console.log('Reading from: ' + fileName);
readInputs(fileName)

// 2. Lookup exercise or glycemic index from DB and add to input object
.then(function(input) {
  console.log(input);
})

// 3. Convert inputs to influence array (which represents the influence of food
//    or exercise on blood sugar based on time of the day)


// 4. Create blood sugar array from influence array (using the above rules of
//   food, exercise, and normalization)


// 5. Create a glycation array from blood sugar array (using the above rule of
//    glycation)


// 6. Output blood sugar and glycation arrays


// Catch errors
.catch(function(error) {
  console.log(error);
});
