const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const aroundCoords = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1,  0],
    [-1,  1], [0,  1], [1,  1]
  ]

  function IsCellInsideField(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }
  
  const map = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    
    for (let j = 0; j < cols; j++) {
      let count = 0;
      
      aroundCoords.forEach((coord) => {
        let x = i + coord[0];
        let y = j + coord[1];
        
        if (IsCellInsideField(x, y)) {
          if (matrix[x][y]) count += 1;
        } 
      })
      row.push(count);
    }
    map.push(row);
  }
  return map;
}

module.exports = {
  minesweeper
};
