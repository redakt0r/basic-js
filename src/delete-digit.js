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
  const variants = [];
  const digits = n.toString().split('');
  for (let i = 0; i < digits.length; i++) {
    const variant = [...digits];
    variant.splice(i, 1);
    variants.push(variant);
  }
  const numbers = variants.map((variant) => Number(variant.join('')));
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
