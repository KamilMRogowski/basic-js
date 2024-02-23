const { NotImplementedError } = require("../extensions/index.js");

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
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  const regex = /(.)\1*/g;
  const parts = str.match(regex);

  const encoded = parts.map((part) => {
    if (part.length > 1) {
      return `${part.length}${part[0]}`;
    } else {
      return part;
    }
  });
  return encoded.join("");
}

module.exports = {
  encodeLine,
};
