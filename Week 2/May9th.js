/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (var i = 0; i <= num; i++) {
    if (i * i >= num) break;
  }
  return i * i === num;
};

/*
68 / 68 test cases passed.
Status: Accepted
Runtime: 52 ms
Memory Usage: 34.4 MB
*/
