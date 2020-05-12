/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  var oldColor = image[sr][sc];
  if (newColor === oldColor) return image;

  function repaint(row, col) {
    if (image[row][col] === oldColor) {
      image[row][col] = newColor;
      if (row > 0) repaint(row - 1, col);
      if (col > 0) repaint(row, col - 1);
      if (row < image.length - 1) repaint(row + 1, col);
      if (col < image[0].length - 1) repaint(row, col + 1);
    }
  }
  repaint(sr, sc);

  return image;
};

/*
277 / 277 test cases passed.
Status: Accepted
Runtime: 72 ms
Memory Usage: 36.2 MB
*/
