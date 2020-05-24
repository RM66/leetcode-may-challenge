/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  var root = {
    val: preorder[0],
    left: null,
    right: null,
  };
  var node = root;
  var parents = {
    [root.val]: null,
  };

  for (var i = 1; i < preorder.length; i++) {
    var val = preorder[i];
    var newNode = {
      val,
      left: null,
      right: null,
    };
    if (val > root.val && preorder[i - 1] < root.val) node = root;
    var parent = parents[node.val];
    if (val < node.val) {
      while (parent && parent.val > val) {
        if (!parent.left) node = parent;
        parent = parents[parent.val];
      }
      node.left = newNode;
      parents[newNode.val] = node;
    } else {
      while (parent && parent.val < val) {
        if (!parent.right) node = parent;
        parent = parents[parent.val];
      }
      node.right = newNode;
      parents[newNode.val] = node;
    }
    node = newNode;
  }

  return root;
};

/*
110 / 110 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 34.1 MB
*/
