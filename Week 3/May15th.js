/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  if (A.length === 1) return A[0];

  var C = [...A, ...A.slice(0, -1)];
  var max = -Infinity;

  for (var start = 0; start < A.length; start++) {
    var sum = 0;
    for (var end = start; end < start + A.length; end++) {
      sum += C[end];
      if (sum > max) max = sum;
    }
  }

  return max;
};

/*
109 / 109 test cases passed.
Status: Accepted
Runtime: 8048 ms
Memory Usage: 48.3 MB
*/
