const { NotImplementedError } = require("../extensions/index.js");

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
  const str1 = Array.from(s1);
  const str2 = Array.from(s2);
  let matchCount = 0;

  str1.forEach((letter) => {
    if (str2.includes(letter)) {
      matchCount++;
      str2[str2.indexOf(letter)] = "";
    }
  });
  return matchCount;
}

module.exports = {
  getCommonCharacterCount,
};
