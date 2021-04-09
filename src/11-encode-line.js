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
  const apperance = [];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    apperance.push(str.split('').filter((el) => el === str[i]).length);
  }
  let i = 0;
  while (i < str.length) {
    if (apperance[i] > 1) {
      result.push(`${apperance[i]}${str[i]}`);
    } else {
      result.push(str[i]);
    }
    i += apperance[i];
  }
  return result.join('');
}
module.exports = encodeLine;
