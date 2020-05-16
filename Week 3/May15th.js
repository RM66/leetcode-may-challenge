/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  if (A.length === 1) return A[0];

  var totalSum = 0;
  for (var num of A) totalSum += num;

  var maxSum = (tempMaxSum = -Infinity);
  var minSum = (tempMinSum = Infinity);

  for (var i = 0; i < A.length; i++) {
    tempMaxSum = Math.max(A[i], A[i] + tempMaxSum);
    if (tempMaxSum > maxSum) maxSum = tempMaxSum;
    tempMinSum = Math.min(A[i], A[i] + tempMinSum);
    if (tempMinSum < minSum) minSum = tempMinSum;
  }

  return maxSum < 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
};

/*
109 / 109 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 41.7 MB
*/
