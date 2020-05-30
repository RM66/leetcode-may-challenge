/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (num, prereqs) {
  if (prereqs.length <= 1) return true;
  var graph = {}; //node:neighbours
  var indegree = new Array(num).fill(0);

  for (var pr of prereqs) {
    if (pr[1] in graph) graph[pr[1]].push(pr[0]);
    else graph[pr[1]] = [pr[0]];
    indegree[pr[0]]++;
  }

  var queue = [];
  for (var i in indegree) {
    if (!indegree[i]) queue.push(i);
  }

  var count = 0;
  while (queue.length) {
    var curr = queue.shift();
    count++;
    if (!(curr in graph)) continue;
    for (var nei of graph[curr]) {
      indegree[nei]--;
      if (!indegree[nei]) queue.push(nei);
    }
  }

  return count === num;
};

/*
46 / 46 test cases passed.
Status: Accepted
Runtime: 76 ms
Memory Usage: 40 MB
*/
