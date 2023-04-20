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
var widthOfBinaryTree = function(root) {
        const minPos = [0];
    let maxWidth = 0;
    
    DFS(root, 0, 0);
    return maxWidth;
    
    function DFS(node, level, pos) {
        if(!node) return;
        if(minPos[level] === undefined) minPos.push(pos);
        
        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff+1);
        
        DFS(node.left, level+1, diff*2);
        DFS(node.right, level+1, diff*2+1);
    }
};
