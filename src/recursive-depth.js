const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    arr.forEach((el) => {
      if (Array.isArray(el) === true) {
        let tempDepth = this.calculateDepth(el, depth + 1);
        maxDepth = tempDepth > maxDepth ? tempDepth : maxDepth;
      }
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
