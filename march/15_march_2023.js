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
 * @return {boolean}
 */
const isCompleteTree = function (root) {
  let queue = [root]; // Initialize a queue with the root node

  // Keep track of whether the previous node was null or not
  let isPreviousNodeisNull = false;

  // Loop until there are no more nodes in the queue
  while (queue.length > 0) {
    // Get the next node from the queue
    const node = queue.shift(); 

    if (!node) {
      // If the node is null
      // Set the flag to true, indicating that the previous node was null
      isPreviousNodeisNull = true;
      continue; // Continue to the next node in the queue
    }

    // If the previous node was null but the current node is not, 
    // then the binary tree is not complete
    if (isPreviousNodeisNull) return false; 

    // Add the left and right children of the current node to the queue
    queue.push(node.left, node.right);
  }
  // If the loop completes without finding any missing nodes, 
  // then the binary tree is complete
  return true;
};
