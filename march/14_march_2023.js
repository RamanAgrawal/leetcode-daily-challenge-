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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0,
    curruntSum = 0;
  DFS(root);
  function DFS(node) {
    curruntSum += node.val;
    if (!node.left && !node.right) {
      sum += curruntSum;
      return;
    }
    if (node.left) {
      curruntSum *= 10;
      DFS(node.left);
      curruntSum -= node.left.val;
      curruntSum /= 10;
    }
    if (node.right) {
      curruntSum *= 10;
      DFS(node.right);
      curruntSum -= node.right.val;
      curruntSum /= 10;
    }
  }
  return sum;
};
