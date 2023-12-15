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
  if (str.length <= 1) return str;

  let count = 0;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      count += 1;
      result += (count === 1 ? '' : count) + str[i];
      count = 0; 
    }
      
  }
  return result;
}

module.exports = {
  encodeLine
};
