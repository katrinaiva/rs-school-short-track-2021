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
  let count = 0;
  const arr = [];
  let value = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== value) {
      arr.push(count === 1 ? value : count + value);
      value = str[i];
      count = 1;
    } else {
      count += 1;
    }

    if (i === str.length - 1) {
      arr.push(count === 1 ? value : count + value);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
