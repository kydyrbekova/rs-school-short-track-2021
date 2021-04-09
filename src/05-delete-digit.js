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
  const arr = n.toString().split('');
  const arrNumbers = [];
  for (let ind = 0; ind < arr.length; ind++) {
    const array = n.toString().split('');
    array.splice(ind, 1);
    arrNumbers.push(array.join(''));
  }
  return Math.max(...arrNumbers);
}

module.exports = deleteDigit;
