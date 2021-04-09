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
function getCommonCharacterCount(str1, str2) {
  let result = 0;
  const str2Array = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    const idx = str2Array.findIndex((s) => s === str1[i]);
    if (idx >= 0) {
      result++;
      str2Array.splice(idx, 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
