/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = (grid) => {
    const N = grid.length;

    const calculate = (row_1, col1, row2, col2) => {
        const node = new Node();

        node.isLeaf = true;
        node.val = grid[row_1][col1];

        for (let i = row_1; i < row2; i++) {
            for (let j = col1; j < col2; j ++) {
                if (grid[i][j] !== node.val) {
                    node.isLeaf = false;
                    break;
                }
            }

            if (node.isLeaf === false) {
                break;
            }
        }

        if (!node.isLeaf) {
            const rowBreakpoint = row_1 + (row2 - row_1) / 2;
            const colBreakpoint = col1 + (col2 - col1) / 2;

            node.topLeft = calculate(row_1, col1, rowBreakpoint, colBreakpoint);
            node.topRight = calculate(row_1, colBreakpoint, rowBreakpoint, col2);
            node.bottomLeft = calculate(rowBreakpoint, col1, row2, colBreakpoint);
            node.bottomRight = calculate(rowBreakpoint, colBreakpoint, row2, col2);
        }

        return node;
    };

    return calculate(0, 0, N, N);
};
