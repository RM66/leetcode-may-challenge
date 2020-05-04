/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var pow = num.toString(2).length;
  return Math.pow(2, pow) - 1 - num;
};

/*
149 / 149 test cases passed.
Status: Accepted
Runtime: 52 ms
Memory Usage: 34 MB
*/
