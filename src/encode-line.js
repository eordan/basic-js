const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  var count = 1;
  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      if (count === 1) {
        result += str[i];
        count = 1;
      } else {
        result += count + str[i];
        count = 1;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine
};