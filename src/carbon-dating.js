const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const parsedSampleActivity = parseFloat(sampleActivity);
  const isNumber = !isNaN(parsedSampleActivity);
  const isValidSampleActivity = typeof sampleActivity === 'string' && isNumber;
  const isWithinRange = parsedSampleActivity > 0 && parsedSampleActivity <= MODERN_ACTIVITY;

  if (!isValidSampleActivity || !isWithinRange) {
    return false;
  }

  const ratio = MODERN_ACTIVITY / parsedSampleActivity;
  const halfLife = Math.log(2) / HALF_LIFE_PERIOD;
  const age = Math.log(ratio) / halfLife;
  const roundedAgeNumber = Math.ceil(age);

  return roundedAgeNumber;
}

module.exports = {
  dateSample
};