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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // Get the number of rows and columns in the matrix
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Initialize the total sum to 0
  let totalSum = 0;

  // Loop through each column in the matrix
  for (let j = 0; j < numCols; j++) {
    // Loop through each row in the column
    for (let i = 0; i < numRows; i++) {
      // If the current value is 0, exit the loop for this column
      if (matrix[i][j] === 0) {
        break;
      }

      // Otherwise, add the current value to the total sum
      totalSum += matrix[i][j];
    }
  }

  // Return the total sum
  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};