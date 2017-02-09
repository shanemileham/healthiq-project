/** Function which converts inputs to an influence array
* (which represents the time influence of food or exercise on blood sugar)
* @param {object} inputs The exercise and food inputs
* @return {array} The array of influence at every minute of the day
*/
function calculateInfluence(inputs) {
  let influence = new Array(1440).fill(0);

  inputs.forEach((element) => {
    let alterationEachMinute = element.index;
    let duration;
    if (element.type === 'food') {
      alterationEachMinute /= 120;
      duration = 120;
    }
    if (element.type === 'exercise') {
      alterationEachMinute /= -60;
      duration = 60;
    }

    const start = element.time;
    for (let i = start; i < Math.min(start + duration, influence.length); i++) {
      influence[i] += alterationEachMinute;
    }
  });

  return influence;
}

module.exports = calculateInfluence;
