/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var notUniq = [];
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (notUniq.includes(c)) continue;
    var pos = s.indexOf(c, i + 1);
    if (pos === -1) return i;
    else notUniq.push(c);
  }
  return -1;
};

/*
104 / 104 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 37.6 MB
*/
