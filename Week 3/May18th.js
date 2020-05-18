/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1 === s2) return true;

  var s1Counter = new Array(26).fill(0);
  for (var i = 0; i < s1.length; i++) {
    var n = s1.charCodeAt(i) - 97;
    s1Counter[n]++;
  }
  s1CounterStr = s1Counter.join("");

  var counter = new Array(26).fill(0);

  for (var i = 0; i < s1.length; i++) {
    var n = s2.charCodeAt(i) - 97;
    counter[n]++;
  }
  if (s1CounterStr === counter.join("")) return true;

  for (var i = 1; i <= s2.length - s1.length; i++) {
    var recentN = s2.charCodeAt(i - 1) - 97;
    counter[recentN]--;
    var lastN = s2.charCodeAt(i + s1.length - 1) - 97;
    counter[lastN]++;
    if (!s1Counter[lastN]) continue;
    if (s1CounterStr === counter.join("")) return true;
  }

  return false;
};

/*
103 / 103 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 41.8 MB
*/
