let readFile = require('./readFile.js');

/** Function which adds an 'index' field to an input object by
* looking it up from food.json and exercise.json
* @param {object} inputs The exercise and food inputs
* @return {promise} The inputs array where each input has an 'index' field
*/
function lookupIndex(inputs) {
  let output = JSON.parse(JSON.stringify(inputs)); // copy the input literally
  return Promise.all([readFile('food.json'), readFile('exercise.json')])
  .then(([food, exercise]) => {
    output.forEach((element) => {
      if (element.type === 'food') {
        element.index = food[element.id].index;
      }
      if (element.type === 'exercise') {
        element.index = exercise[element.id].index;
      }
    });

    return output;
  });
}

module.exports = lookupIndex;
