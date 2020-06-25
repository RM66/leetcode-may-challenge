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

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const counter = {};
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code in counter) counter[code]++;
    else counter[code] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (counter[code] === 1) return i;
  }
  return -1;
};

/*
104 / 104 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 38.5 MB
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) return i;
  }
  return -1;
};

/*
104 / 104 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 38.8 MB
*/
