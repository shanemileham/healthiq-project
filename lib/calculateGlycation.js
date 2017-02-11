/** Function which calculates the total glycation
* @param {array} bloodSugar The graph of blood sugar over time
* @return {array} The graph of total glycation over time
*/
function calculateGlycation(bloodSugar) {
  let totalGlycation = 0;

  let glycation = bloodSugar.map((element) => {
    if (element > 150) {
      totalGlycation++;
    }
    return totalGlycation;
  });

  return glycation;
}

module.exports = calculateGlycation;
