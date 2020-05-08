/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) return 1;
    function solve(start, end) {
      var mid = Math.round((start + end) / 2);
      if (isBadVersion(mid)) {
        if (mid - 1 === start) return mid;
        return solve(start, mid);
      } else {
        if (mid + 1 === end) return end;
        return solve(mid, end);
      }
    }
    return solve(1, n);
  };
};

/*
22 / 22 test cases passed.
Status: Accepted
Runtime: 52 ms
Memory Usage: 33.7 MB
*/
