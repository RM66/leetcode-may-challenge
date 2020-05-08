/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  var counter = {};
  for (var el of nums) {
    if (counter[el]) {
      counter[el]++;
      if (counter[el] >= nums.length / 2) return el;
    } else counter[el] = 1;
  }
};

/*
46 / 46 test cases passed.
Status: Accepted
Runtime: 56 ms
Memory Usage: 37.7 MB
*/
