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
var minDiffInBST = function(root) {
   let min = Number.POSITIVE_INFINITY;
    let pre = null;
    function minDiff(root) {
        if(!root) return;
        minDiff(root.left);
        if(pre)
        min = Math.min(min, Math.abs(pre.val - root.val));
        pre = root;
        minDiff(root.right)
    } 
    minDiff(root);
    return min;  
};
