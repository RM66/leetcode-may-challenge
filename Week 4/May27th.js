/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  if (N === 1) return true;

  var graph = {};
  var colors;

  for (var pair of dislikes) {
    if (graph[pair[0]]) graph[pair[0]].push(pair[1]);
    else graph[pair[0]] = [pair[1]];
    if (graph[pair[1]]) graph[pair[1]].push(pair[0]);
    else graph[pair[1]] = [pair[0]];
  }

  var sortedGraph = Object.entries(graph).sort(
    ([k1, v1], [k2, v2]) => v2.length - v1.length
  );

  for (var [n, enemies] of sortedGraph) {
    if (!colors) {
      colors = {};
      colors[n] = true;
      for (var x of enemies) colors[x] = false;
      continue;
    }
    if (n in colors) {
      var xColor = !colors[n];
      for (var x of enemies) {
        if (x in colors && colors[x] !== xColor) return false;
        colors[x] = xColor;
      }
    }
  }
  return true;
};

/*
66 / 66 test cases passed.
Status: Accepted
Runtime: 140 ms
Memory Usage: 48.2 MB
*/
