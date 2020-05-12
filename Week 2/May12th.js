/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  for (var i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

/*
12 / 12 test cases passed.
Status: Accepted
Runtime: 44 ms
Memory Usage: 35.6 MB
*/
