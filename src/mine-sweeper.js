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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // Define the number of rows and columns in the matrix
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create an empty 2D array to store the result
  const result = [];

  // Loop through each row in the matrix.
  for (let i = 0; i < numRows; i++) {
    // Create an empty array to store the row result
    const rowResult = [];

    // Loop through each column in the row
    for (let j = 0; j < numCols; j++) {
      // Initialize the count of neighboring mines to 0
      let numNeighborMines = 0;

      // Loop through each neighboring cell
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          // Check that the neighboring cell is within the matrix and not the current cell
          if (x >= 0 && x < numRows && y >= 0 && y < numCols && !(x == i && y == j)) {
            // If the neighboring cell contains a mine, increment the count
            if (matrix[x][y]) {
              numNeighborMines++;
            }
          }
        }
      }

      // Add the count of neighboring mines to the row result
      rowResult.push(numNeighborMines);
    }

    // Add the row result to the overall result
    result.push(rowResult);
  }

  // Return the result
  return result;
}

module.exports = {
  minesweeper
};