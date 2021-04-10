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
  if (domains.length === 0) {
    return {};
  }
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const currentDom = domains[i];
    const reverseDomains = currentDom.split('.').reverse();
    let temp = '';
    for (let j = 0; j < reverseDomains.length; j++) {
      temp += `.${reverseDomains[j]}`;
      if (!result[temp]) {
        result[temp] = 1;
      } else {
        result[temp]++;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
