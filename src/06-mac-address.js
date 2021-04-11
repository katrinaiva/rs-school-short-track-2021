/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const cntStr = '0123456789ABCDEF';
  let isMac = true;
  const macArr = n.split('-');
  if (macArr.length !== 6) {
    return false;
  }
  macArr.forEach((element) => {
    if (!(cntStr.includes(element[0]) && cntStr.includes(element[1]))) {
      isMac = false;
    }
  });

  return isMac;
}

module.exports = isMAC48Address;
