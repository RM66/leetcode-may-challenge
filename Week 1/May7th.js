/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  root.depth = 0;
  var queue = [root];
  var xDepth, yDepth;

  while (queue.length > 0) {
    var node = queue.shift();
    if (node.val === x) xDepth = node.depth;
    else if (node.val === y) yDepth = node.depth;
    if (xDepth !== undefined && yDepth !== undefined) {
      return xDepth === yDepth;
    }
    if (node.left) {
      node.left.depth = node.depth + 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.depth = node.depth + 1;
      queue.push(node.right);
    }
    if (
      node.left &&
      node.right &&
      ((node.left.val === x && node.right.val === y) ||
        (node.left.val === y && node.right.val === x))
    ) {
      return false;
    }
  }

  return false;
};

/*
103 / 103 test cases passed.
Status: Accepted
Runtime: 52 ms
Memory Usage: 34.8 MB
*/
