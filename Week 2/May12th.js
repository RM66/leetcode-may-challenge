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

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var mid = Math.trunc((left + right) / 2);
    if (nums[mid] === nums[mid ^ 1]) left = mid + 1;
    else right = mid - 1;
  }
  return nums[left];
};

/*
14 / 14 test cases passed.
Status: Accepted
Runtime: 60 ms
Memory Usage: 36.7 MB
*/
