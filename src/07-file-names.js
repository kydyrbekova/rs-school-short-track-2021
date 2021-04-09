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
  const result = [];
  const foundIndex = [];
  for (let i = 0; i < names.length; i++) {
    if (i === 0) {
      result.push(names[i]);
    } else if (result.includes(names[i])) {
      foundIndex.push(result.indexOf(names[i]));
      const presence = foundIndex.filter((ind) => ind === result.indexOf(names[i])).length;
      result.push(`${names[i]}(${presence})`);
    } else {
      result.push(names[i]);
    }
  }
  return result;
}
module.exports = renameFiles;
