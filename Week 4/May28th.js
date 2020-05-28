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
