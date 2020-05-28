/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var res = [];
  for (var n = 0; n <= num; n++) {
    res.push(n.toString(2).replace(/0/g, "").length);
  }
  return res;
};

/*
15 / 15 test cases passed.
Status: Accepted
Runtime: 136 ms
Memory Usage: 47.9 MB
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var res = new Array(num + 1);
  res[0] = 0;
  for (var n = 1; n <= num; n++) {
    if (n % 2) res[n] = res[n - 1] + 1;
    else res[n] = res[n / 2];
  }
  return res;
};

/*
15 / 15 test cases passed.
Status: Accepted
Runtime: 84 ms
Memory Usage: 41.6 MB
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var res = [0];
  for (var n = 1; n <= num; n++) res.push(res[n >> 1] + (n % 2));
  return res;
};

/*
15 / 15 test cases passed.
Status: Accepted
Runtime: 84 ms
Memory Usage: 41.6 MB
*/
