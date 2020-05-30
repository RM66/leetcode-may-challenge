/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  var pWithD = [];
  for (p of points) {
    pWithD.push({ p, d: p[0] ** 2 + p[1] ** 2 });
  }
  return pWithD
    .sort((a, b) => a.d - b.d)
    .slice(0, K)
    .map((x) => x.p);
};

/*
83 / 83 test cases passed.
Status: Accepted
Runtime: 176 ms
Memory Usage: 49.6 MB
*/
