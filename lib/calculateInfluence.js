/** Function which converts inputs to an influence array
* (which represents the time influence of food or exercise on blood sugar)
* @param {object} inputs The exercise and food inputs
* @return {array} The array of influence at every minute of the day
*/
function calculateInfluence(inputs) {
  let influence = new Array(1440).fill(0);

  return influence;
}

module.exports = calculateInfluence;
