/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  if (N === 1) return true;

  var queue = []; // pairs
  var group1 = [dislikes[0][0]];
  var group2 = [dislikes[0][1]];

  function distribute(pair) {
    if (group1.includes(pair[0])) {
      group2.push(pair[1]);
    } else if (group2.includes(pair[0])) {
      group1.push(pair[1]);
    } else if (group1.includes(pair[1])) {
      group2.push(pair[0]);
    } else if (group2.includes(pair[1])) {
      group1.push(pair[0]);
    } else return false;
  }

  for (var i = 1; i < dislikes.length; i++) {
    var pair = dislikes[i];
    if (distribute(pair) === false) queue.push(pair);
  }
  while (queue.length) {
    var pair = queue.shift();
    if (distribute(pair) === false) queue.push(pair);
  }

  for (var i = 0; i < group1.length; i++) {
    if (group2.includes(group1[i])) return false;
  }
  return true;
};

/*
7 / 66 test cases passed.
Status: Time Limit Exceeded
*/
