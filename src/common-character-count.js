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
  function makeStrMap(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      map[str[i]] ? map[str[i]] += 1 : map[str[i]] = 1;
    }
    return map;
  }
  const s1Map = makeStrMap(s1);
  const s2Map = makeStrMap(s2);
  let commonCount = 0;
  for (let char in s1Map) {
    if (s2Map.hasOwnProperty(char)) {
      commonCount += Math.min(s2Map[char], s1Map[char])
    }
  }
  return commonCount
}

module.exports = {
  getCommonCharacterCount
};
