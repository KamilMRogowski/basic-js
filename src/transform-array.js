const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  let transformed = [...arr];
  const controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
    "",
  ];
  for (let index = 0; index < transformed.length; index++) {
    if (transformed[index] === controls[0]) {
      if (
        transformed[index + 1] !== undefined &&
        !controls.includes(transformed[index + 1])
      ) {
        transformed[index + 1] = controls[4];
      }
    } else if (transformed[index] === controls[1]) {
      if (
        transformed[index - 1] !== undefined &&
        !controls.includes(transformed[index - 1])
      ) {
        transformed[index - 1] = controls[4];
      }
    } else if (transformed[index] === controls[2]) {
      if (
        transformed[index + 1] !== undefined &&
        !controls.includes(transformed[index + 1])
      ) {
        transformed[index] = arr[index + 1];
      }
    } else if (transformed[index] === controls[3]) {
      if (
        !controls.includes(transformed[index - 1]) &&
        transformed[index - 1] !== undefined
      ) {
        transformed[index] = arr[index - 1];
      }
    }
  }
  transformed = transformed.filter((el) => !controls.includes(el));
  return transformed;
}

module.exports = {
  transform,
};
