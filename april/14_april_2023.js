/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
   const n = s.length;
  const dp = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let pre = 0;
    for (let j = i; j < n; j++) {
      let temp = dp[j];
      if (i === j) {
        dp[j] = 1;
      } else if (s[i] === s[j]) {
        dp[j] = pre + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = temp;
    }
  }
  return dp[n - 1];  
};
