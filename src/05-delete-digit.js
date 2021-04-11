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
  const minVal = Math.min(...arr);
  const delEl = arr.indexOf(minVal.toString());
  arr.splice(delEl, 1);
  return +arr.join('');
}

module.exports = deleteDigit;
