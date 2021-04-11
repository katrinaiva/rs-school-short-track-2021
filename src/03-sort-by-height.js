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
  const arrNegativeIndex = [];
  arr.forEach((element, index) => {
    if (element === -1) {
      arrNegativeIndex.push(index);
    }
  });

  const array = arr.sort((a, b) => a - b);

  if (arrNegativeIndex.length > 0) {
    array.splice(0, arrNegativeIndex.length);
    let i = 0;

    while (i < arrNegativeIndex.length) {
      array.splice(arrNegativeIndex[i], 0, -1);
      i++;
    }
  }

  return array;
}

module.exports = sortByHeight;
