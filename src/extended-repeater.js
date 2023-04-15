const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // Set the default values for the options
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  // Convert `str` and `addition` to strings
  str = String(str);
  addition = String(addition);

  // Create arrays for repeated strings and the additions
  let repeatedStrings = [];
  let repeatedAdditions = [];

  // Repeat the addition string
  for (let i = 0; i < additionRepeatTimes; i++) {
    repeatedAdditions.push(addition);
  }

  // Create the repeated string with the additions
  let repeatedString = str + repeatedAdditions.join(additionSeparator);

  // Repeat the string with the additions
  for (let i = 0; i < repeatTimes; i++) {
    repeatedStrings.push(repeatedString);
  }

  // Join the repeated strings with the separator
  return repeatedStrings.join(separator);
}

module.exports = {
  repeater
};