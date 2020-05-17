/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s === p) return [0];

  var pDict = {};
  for (var ch of p) {
    if (pDict[ch]) pDict[ch]++;
    else pDict[ch] = 1;
  }

  var res = [];
  var counter = {};

  function check(idx) {
    var ana = true;
    for (var ch in pDict) {
      if (pDict[ch] !== counter[ch]) ana = false;
    }
    if (ana) res.push(idx);
  }

  var str = s.substr(0, p.length);
  for (var ch of str) {
    if (counter[ch]) counter[ch]++;
    else counter[ch] = 1;
  }
  check(0);

  for (var i = 1; i <= s.length - p.length; i++) {
    var recent = s[i - 1];
    counter[recent]--;
    var last = s[i + p.length - 1];
    if (counter[last]) counter[last]++;
    else counter[last] = 1;
    check(i);
  }

  return res;
};

/*
36 / 36 test cases passed.
Status: Accepted
Runtime: 160 ms
Memory Usage: 43 MB
*/
