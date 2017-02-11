/** Function which returns a blood sugar array (for every minute of the day)
* from an input of the influence on blood sugar based on food and exercise
* @param {array} influence The influence on blood sugar
* @return {array} The blood sugar at each time of the day (minute intervals)
*/
function calculateBloodSugar(influence) {
  let bloodSugar = new Array(influence.length + 1);
  bloodSugar[0] = 80; // starts at 80 according to project

  influence.forEach((value, index) => {
    // Under influence
    if (value !== 0 && value !== null) {
      bloodSugar[index+1] = bloodSugar[index] + value;
    }

    // Zero influence
    if (value === 0) {
      bloodSugar[index+1] = bloodSugar[index];
    }

    // Null influence (normalization)
    if (value === null) {
      let val = 0;
      if (bloodSugar[index] > 80) {
        val = -1;
      }
      if (bloodSugar[index] < 80) {
        val = 1;
      }
      bloodSugar[index+1] = bloodSugar[index] + val;
    }
  });

  return bloodSugar;
}

module.exports = calculateBloodSugar;
