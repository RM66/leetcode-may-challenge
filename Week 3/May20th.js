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
  var i = 0;
  var res;

  (function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    if (res) return;
    i++;
    if (i === k) return (res = node.val);
    inOrder(node.right);
  })(root);

  return res;
};

/*
91 / 91 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 39.3 MB
*/
