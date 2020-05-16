/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  if (A.length === 1) return A[0];
  var totalSum = 0;
  for (var num of A) totalSum += num;
  var maxSum = maxArrSum(A, 1);
  var maxNegSum = maxArrSum(A, -1);
  return maxSum < 0 ? maxSum : Math.max(maxSum, totalSum + maxNegSum);
};

function maxArrSum(arr, sign) {
  var max = (sum = -Infinity);
  for (var i = 0; i < arr.length; i++) {
    sum = Math.max(arr[i] * sign, arr[i] * sign + sum);
    if (sum > max) max = sum;
  }
  return max;
}

/*
109 / 109 test cases passed.
Status: Accepted
Runtime: 72 ms
Memory Usage: 41.3 MB
*/
