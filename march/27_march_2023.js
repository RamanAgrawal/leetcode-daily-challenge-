/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
     let prevRow = Array(grid[0].length).fill(Infinity);
  prevRow[prevRow.length - 1] = 0;

  for (let row = grid.length - 1; row >= 0; row--) {
    const currentRow = Array(grid[0].length).fill(0);

    for (let col = grid[0].length - 1; col >= 0; col--) {
      const bottomCell = prevRow[col];
      const rightCell = currentRow[col + 1] ?? Infinity;

      currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
    }
    prevRow = currentRow;
  }

  return prevRow[0];
};
