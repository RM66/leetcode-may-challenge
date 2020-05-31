/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var dp = [];
  for (var i = 0; i <= word1.length; i++) {
    var row = [i];
    if (i == 0) {
      for (var j = 1; j <= word2.length; j++) row.push(j);
    }
    dp.push(row);
  }

  for (var i = 1; i <= word1.length; i++) {
    for (var j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }
  return dp[word1.length][word2.length];
};

/*
1146 / 1146 test cases passed.
Status: Accepted
Runtime: 96 ms
Memory Usage: 43.8 MB
*/
