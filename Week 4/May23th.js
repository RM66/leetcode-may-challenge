/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  var res = [];
  var i = (j = 0);

  while (i < A.length && j < B.length) {
    var intersec = null;
    var a = A[i];
    var b = B[j];

    if (a[0] <= b[0]) {
      if (b[0] <= a[1]) intersec = [b[0], Math.min(a[1], b[1])];
    } else {
      if (a[0] <= b[1]) intersec = [a[0], Math.min(a[1], b[1])];
    }
    if (intersec) res.push(intersec);
    if (a[1] === b[1]) {
      i++;
      j++;
    } else if (a[1] < b[1]) i++;
    else j++;
  }

  return res;
};

/*
86 / 86 test cases passed.
Status: Accepted
Runtime: 76 ms
Memory Usage: 42.3 MB
*/
