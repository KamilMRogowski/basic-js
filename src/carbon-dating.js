const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    sampleActivity === undefined ||
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    !isFinite(sampleActivity)
  ) {
    return false;
  }
  const rateConstant = Math.log(2) / HALF_LIFE_PERIOD;
  let sampleAge = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant
  );
  sampleAge = isFinite(sampleAge) ? sampleAge : false;
  return sampleAge;
}

module.exports = {
  dateSample,
};
