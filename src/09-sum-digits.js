/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nString = n.toString();
  let sum;
  while (nString.length > 1) {
    const nArray = nString.split('');
    sum = 0;
    for (let i = 0; i < nArray.length; i++) {
      sum += parseInt(nArray[i], 10);
    }
    nString = sum.toString();
  }
  return sum;
}

module.exports = getSumOfDigits;
