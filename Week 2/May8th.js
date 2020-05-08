/**
 * @param {number[][]} coords
 * @return {boolean}
 */
var checkStraightLine = function (coords) {
  if (coords.length === 2) return true;
  var k = calcK(coords[1], coords[0]);
  for (var i = 2; i < coords.length; i++) {
    if (calcK(coords[i - 1], coords[i]) !== k) return false;
  }
  return true;
};

function calcK(point1, point2) {
  return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}

/*
66 / 66 test cases passed.
Status: Accepted
Runtime: 52 ms
Memory Usage: 34 MB
*/
