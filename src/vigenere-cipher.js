const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (typeof message !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    const keyCodes = key
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0) - 65);
    let currentKey = 0;

    let encryptedMessage = message
      .toUpperCase()
      .split("")
      .map((letter) => {
        let letterCode = letter.charCodeAt(0);
        if (letterCode >= 65 && letterCode <= 90) {
          currentKey = currentKey === keyCodes.length ? 0 : currentKey;
          letterCode = letterCode + keyCodes[currentKey];
          letterCode = letterCode > 90 ? letterCode - 26 : letterCode;
          currentKey++;
          return String.fromCharCode(letterCode);
        } else {
          return letter;
        }
      });
    encryptedMessage =
      this.direction === true ? encryptedMessage : encryptedMessage.reverse();
    return encryptedMessage.join("");
  }
  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    const keyCodes = key
      .toUpperCase()
      .split("")
      .map((letter) => letter.charCodeAt(0) - 65);
    let currentKey = 0;

    let message = encryptedMessage
      .toUpperCase()
      .split("")
      .map((letter) => {
        let letterCode = letter.charCodeAt(0);
        if (letterCode >= 65 && letterCode <= 90) {
          currentKey = currentKey === keyCodes.length ? 0 : currentKey;
          letterCode = letterCode - keyCodes[currentKey];
          letterCode = letterCode < 65 ? letterCode + 26 : letterCode;
          currentKey++;
          return String.fromCharCode(letterCode);
        } else {
          return letter;
        }
      });
    message = this.direction === true ? message : message.reverse();
    return message.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
