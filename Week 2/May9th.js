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

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var left = 0;
  var right = num;
  while (left <= right) {
    var mid = Math.trunc((left + right) / 2);
    var square = mid * mid;
    if (square === num) return true;
    if (square > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};

/*
70 / 70 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 36.6 MB
*/
