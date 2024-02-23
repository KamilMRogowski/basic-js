const { NotImplementedError } = require("../extensions/index.js");

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
  const digits = Array.from(String(n), Number);
  //Zacznij od index
  const options = [];
  digits.forEach((digit, index) => {
    digits[index] = "";
    const option = digits.join("");
    options.push(Number(option));
    digits[index] = digit;
  });
  return Math.max(...options);
}

module.exports = {
  deleteDigit,
};
