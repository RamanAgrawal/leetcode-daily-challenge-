/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const queue: TreeNode[] = [root];
    let level = 0;

    while (queue.length) {
        const size = queue.length;
        const currentLevel: TreeNode[] = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            currentLevel.push(node);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (level % 2 === 1) {
            // Reverse values in place for odd levels
            const values = currentLevel.map(node => node.val).reverse();
            for (let i = 0; i < currentLevel.length; i++) {
                currentLevel[i].val = values[i];
            }
        }

        level++;
    }

    return root;
}
