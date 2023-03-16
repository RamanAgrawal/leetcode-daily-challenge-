/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
      if(inorder.length ==  0 || postorder.length == 0) return null
    let rootval = postorder.pop()
    let root = new TreeNode(rootval)

    let ind = inorder.indexOf(rootval)
    let le = inorder.slice(0, ind)
    let ri = inorder.slice(ind+1)

   
    root.right = buildTree(ri,postorder)
     root.left= buildTree(le,postorder)

    return root
};
