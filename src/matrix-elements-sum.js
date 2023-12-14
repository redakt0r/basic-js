const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let sumAboveZeros = 0;
  let wasZero = false;
  let beforeZero = 0;

  for (let i = 0; i < cols; i++) {
    wasZero = false;
    beforeZero = 0;
    console.log(`-----------------------`);
    for (let j = rows - 1; j >= 0; j--) {
      console.log(`matrix[${j}][${i}]`, matrix[j][i]);
      if (matrix[j][i] ===0) {
        wasZero = true;
        beforeZero = 0;
        console.log(`wasZero`, wasZero)
      }
      !wasZero ? beforeZero += matrix[j][i]: beforeZero += 0;
      wasZero ? sumAboveZeros += matrix[j][i] : sumAboveZeros += 0;
      if (j === 0 && !wasZero) {
        sumAboveZeros += beforeZero;
      }
    }
  }
  return sumAboveZeros;
}

module.exports = {
  getMatrixElementsSum
};
