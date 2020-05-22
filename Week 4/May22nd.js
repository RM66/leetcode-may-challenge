/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var dict = Array.from(s).reduce((acc, ch) => {
    acc[ch] = acc[ch] ? acc[ch] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(dict)
    .sort(([_, countA], [_, countB]) => countB - countA)
    .map(([char, count]) => char.repeat(count))
    .join("");
};

/*
35 / 35 test cases passed.
Status: Accepted
Runtime: 76 ms
Memory Usage: 37.9 MB
*/
