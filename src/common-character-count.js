const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let count = 0;
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  for (const c of set1.size < set2.size ? set1 : set2) {
    count += Math.min(s1.split(c).length - 1, s2.split(c).length - 1);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};