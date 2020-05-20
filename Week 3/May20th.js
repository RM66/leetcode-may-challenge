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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    if (node.val < smallest[0]) {
      smallest.unshift(node.val);
    } else if (node.val < smallest[k - 1]) {
      for (var i = k - 1; i >= 0; i--) {
        if (smallest[i] <= node.val) {
          smallest[i + 1] = node.val;
          break;
        }
      }
    }
    smallest.length = k;
    inOrder(node.right);
  }

  const smallest = new Array(k).fill(Infinity);
  inOrder(root);

  return smallest[k - 1];
};

/*
91 / 91 test cases passed.
Status: Accepted
Runtime: 60 ms
Memory Usage: 39.1 MB
*/
