/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  var dict = { 0: -1 }; // rate: index
  var maxLen = 0;
  var rate = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i]) rate++;
    else rate--;

    if (rate in dict) maxLen = Math.max(maxLen, i - dict[rate]);
    else dict[rate] = i;
  }

  return maxLen;
};

/*
555 / 555 test cases passed.
Status: Accepted
Runtime: 128 ms
Memory Usage: 46.6 MB
*/
