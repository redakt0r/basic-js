const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let earsCount = 0;
  if (matrix.length === 0) return earsCount;
  
  const rows = matrix.length;
  for (let i = 0; i < rows; i++) {    
    const cols = matrix[i].length;
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '^^') earsCount++;
    }
  }
  return earsCount

  //редиски, что за двор такой кривой в тесте 'level 2'? так не интересно
  //держите за это дурацкий кодварсовский oneliner. 
  
  // return matrix.flat().reduce((acc, curr) => curr === '^^' ? acc += 1: acc, 0);
  // извините, это я ограниченный человек (((
/*   let earsCount = 0;
  if (matrix.length === 0) return earsCount;
  
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === '^^') earsCount++;
    }
  }
  return earsCount */
}

module.exports = {
  countCats
};
