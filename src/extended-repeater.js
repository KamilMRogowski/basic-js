const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

/*
Powtórz ile razy trzeba
Sprawdź czy istnieje addition
*/
function repeater(str, options) {
  const defaultRepeat = 1;
  const defaultseparator = "+";
  const defaultAdditionSeparator = "|";

  if (options.repeatTimes === undefined) {
    options.repeatTimes = defaultRepeat;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = defaultRepeat;
  }
  if (options.separator === undefined) {
    options.separator = defaultseparator;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = defaultAdditionSeparator;
  }

  let add;
  if (options.addition !== undefined) {
    add = new Array(options.additionRepeatTimes).fill(String(options.addition));
    add = add.join(String(options.additionSeparator));
  } else {
    add = "";
  }
  let repeated = new Array(options.repeatTimes).fill(String(str) + add);
  repeated = repeated.join(options.separator);
  return repeated;
}

module.exports = {
  repeater,
};
