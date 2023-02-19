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
 * @return {number[][]}
 */
 
var zigzagLevelOrder = function(root) {
    if(root == null) return [];

    let q = [];
    let ans = [];

    let leftToRight = true;
    q.push(root);

    while(q.length != 0){
        let levelNodesList = [];
        let nodesAtCurrlevel = q.length;

        for(let i = nodesAtCurrlevel; i>0; i--){
            let currNode = q.shift();

            if(leftToRight == true){
                levelNodesList.push(currNode.val);
            }else{
                levelNodesList.unshift(currNode.val);
            }

            if(currNode.left != null){
                q.push(currNode.left)
            }

            if(currNode.right != null){
                q.push(currNode.right)
            }
        }

        leftToRight = !leftToRight;
        ans.push(levelNodesList);
    }
    return ans;

};
