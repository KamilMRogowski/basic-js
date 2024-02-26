const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};
  const renamedFiles = names.map((name) => {
    if (usedNames[name] === undefined) {
      usedNames[name] = 0;
    } else {
      usedNames[name]++;
    }
    let fileName = usedNames[name] === 0 ? name : `${name}(${usedNames[name]})`;
    usedNames[fileName] = 0;
    return fileName;
  });
  return renamedFiles;
}

module.exports = {
  renameFiles,
};
