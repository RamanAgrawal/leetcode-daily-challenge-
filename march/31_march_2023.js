/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const n = pizza.length;
  const m = pizza[0].length;
  const MOD = Math.pow(10, 9) + 7;
  const preSum = new Array(n).fill().map((_) => new Array(m).fill());

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const right = j + 1 === m ? 0 : preSum[i][j + 1];
      const bottom = i + 1 === n ? 0 : preSum[i + 1][j];
      const diagonal = i + 1 === n || j + 1 === m ? 0 : preSum[i + 1][j + 1];
      const count = pizza[i][j] === 'A' ? 1 : 0;

      preSum[i][j] = right + bottom - diagonal + count;
    }
  }

  const dp = new Array(k)
    .fill()
    .map((_) => new Array(n).fill().map((_) => new Array(m).fill()));
  return dfs(0, 0, k - 1, dp, preSum, n, m, MOD);
};

function dfs(i, j, cuts, dp, preSum, n, m, MOD) {
  if (preSum[i][j] === 0) return 0;
  if (cuts === 0) return 1;
  if (dp[cuts][i][j] !== undefined) return dp[cuts][i][j];

  let result = 0;
  // cut horizontal
  for (let c = j + 1; c < m; c++) {
    if (preSum[i][j] - preSum[i][c] > 0) {
      result = (result + dfs(i, c, cuts - 1, dp, preSum, n, m, MOD)) % MOD;
    }
  }

  // cut vertical
  for (let r = i + 1; r < n; r++) {
    if (preSum[i][j] - preSum[r][j] > 0) {
      result = (result + dfs(r, j, cuts - 1, dp, preSum, n, m, MOD)) % MOD;
    }
  }

  return (dp[cuts][i][j] = result);
}
