const { NotImplementedError } = require("../extensions/index.js");

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
  const stats = {};
  domains.map((domain) => {
    const names = domain.split(".").reverse();
    const domainCount = names.length;
    let statName = `.${names.join(".")}`;
    for (let i = 0; i < domainCount; i++) {
      if (stats[statName] === undefined) {
        stats[statName] = 1;
      } else {
        stats[statName] += 1;
      }
      statName = statName.slice(0, statName.lastIndexOf("."));
    }
  });
  return stats;
}

module.exports = {
  getDNSStats,
};
