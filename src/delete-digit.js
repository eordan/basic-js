const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const figures = Array.from(String(n), Number);
  let maxFig = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < figures.length; i++) {
    const newFig = Number(figures.filter((digit, index) => index !== i).join(''));
    if (newFig > maxFig) {
      maxFig = newFig;
    }
  }

  return maxFig;
}

module.exports = {
  deleteDigit
};