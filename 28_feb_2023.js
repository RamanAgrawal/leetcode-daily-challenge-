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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const map = new Map();
  const result = new Set();
    const dfs = node =>{
      if(node === null) return null
      const key = `root:${node.val}, left:${dfs(node.left)},right:${dfs(node.right)}`
      if(map.has(key)){
        result.add(map.get(key))
      }else{
        map.set(key, node)
      }
      return key
    }
    dfs(root)
    return Array.from(result)
};
