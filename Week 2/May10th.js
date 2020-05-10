/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (N === 1) return 1;
  var candidates = {};
  for (var pair of trust) {
    if (!candidates[pair[1]]) candidates[pair[1]] = 1;
    else candidates[pair[1]]++;
    candidates[pair[0]] = -N;
  }
  for (var judge in candidates) {
    if (candidates[judge] === N - 1) return judge;
  }
  return -1;
};

/*
89 / 89 test cases passed.
Status: Accepted
Runtime: 88 ms
Memory Usage: 43.7 MB
*/
