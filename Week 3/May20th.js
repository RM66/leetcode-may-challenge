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
  var stack = [];
  var node = root;
  while (node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (--k === 0) return node.val;
    node = node.right;
  }
};

/*
91 / 91 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 42.4 MB
*/
