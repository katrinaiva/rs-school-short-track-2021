/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const l = matrix.length;
  const column = matrix[0].length;
  const arr = [];
  let sum = 0;

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < l; j++) {
      if (matrix[j][i] === 0) {
        break;
      } else {
        arr.push(matrix[j][i]);
      }
    }
  }

  for (let ind = 0; ind < arr.length; ind++) {
    sum += arr[ind];
  }
  return sum;
}

module.exports = getMatrixElementsSum;
