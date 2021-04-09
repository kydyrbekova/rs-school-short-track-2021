/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array1 = [];
  const array2 = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      array1.push(i);
    } else {
      array2.push(arr[i]);
    }
  }
  array2.sort((a, b) => a - b);
  let ind1 = 0;
  let ind2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ind1 < array1.length && i === array1[ind1]) {
      result.push(arr[i]);
      ind1++;
    } else if (ind2 < array2.length) {
      result.push(array2[ind2]);
      ind2++;
    }
  }
  return result;
}

module.exports = sortByHeight;
