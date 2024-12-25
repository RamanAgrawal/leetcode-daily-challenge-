/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
    const result: number[] = [];
    if(!root) {
        return [];
    }

    const getRowValue = (row: number, tree: TreeNode): void => {
        const value = tree.val;
        const max = result[row] ?? -Infinity;
        result[row] = Math.max(max, value);

        if(tree.left) {
            getRowValue(row + 1, tree.left);
        }
        if(tree.right) {
            getRowValue(row + 1, tree.right);
        }
    }
    getRowValue(0, root);

    return result;
};
