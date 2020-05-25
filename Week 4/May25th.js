/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
  var dp = [];
  for (var i = 0; i <= A.length; i++) dp.push(new Array(B.length + 1).fill(0));

  for (var i = 1; i <= A.length; i++) {
    for (var j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[A.length][B.length];
};

/*
74 / 74 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 40.1 MB
*/
