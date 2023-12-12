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
  const sampleActivityValue = Number(sampleActivity);
  const isDataTypeString = typeof sampleActivity === 'string';
  const isDataNaN = isNaN(Number(sampleActivity));

  if (sampleActivityValue <= 0 ||
    sampleActivityValue > MODERN_ACTIVITY ||
    !isDataTypeString ||
    isDataNaN) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const years = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityValue) / k);
  return years;
}

module.exports = {
  dateSample
};
