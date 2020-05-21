/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  var count = 0;

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (i !== 0 && j !== 0 && matrix[i][j] !== 0) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) +
          1;
      }
      count += matrix[i][j];
    }
  }

  return count;
};

/*
32 / 32 test cases passed.
Status: Accepted
Runtime: 76 ms
Memory Usage: 40 MB
*/
