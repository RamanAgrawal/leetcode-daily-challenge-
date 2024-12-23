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

function minimumOperations(root: TreeNode | null): number {
    if (!root) return 0;

    const queue: TreeNode[] = [root];
    let totalSwaps = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            levelValues.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        totalSwaps += calculateMinSwaps(levelValues);
    }

    return totalSwaps;
}

// Helper function
function calculateMinSwaps(arr: number[]): number {
    const n = arr.length;
    const sorted = [...arr].map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || sorted[i][1] === i) continue;

        // Calculate cycle size
        let cycleSize = 0;
        let j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = sorted[j][1];
            cycleSize++;
        }
        swaps += cycleSize - 1;
    }

    return swaps;
}
