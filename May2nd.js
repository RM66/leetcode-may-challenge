/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var regex = new RegExp(`[${J}]`, "g");
  return [...S.matchAll(regex)].length;
};

/*
254 / 254 test cases passed.
Status: Accepted
Runtime: 56 ms
Memory Usage: 34.2 MB
*/
