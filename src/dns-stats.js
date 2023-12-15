const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const appearances = {};
  
  domains.forEach((domain) => {
    const domainChunks = domain.split('.').reverse();
    
    let current = '';

    for (let i = 0; i < domainChunks.length; i++) {
      current += '.' + domainChunks[i];
      appearances[current] ? appearances[current] += 1 : appearances[current] = 1;
    }
  })
  return appearances
}

module.exports = {
  getDNSStats
};
