/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const modulo = 1e9 + 7
    let ans = 0

    // dp array of lenght high + 1 filled with zeros
    // dp[i] denotes number of valid strings of lenght i
    const dp = Array(high + 1).fill(0)
    
    // an empty string "" can be constructed only in 1 way, so dp[0] = 1
    dp[0] = 1

    for (let i = 1; i <= high; i++) {
        // for each i, a string of length i can be constructed
        // by adding either "0" zero time
        // or by adding "1" one times
        // dp[i] = dp[i - zero] + dp[i - one]

        if (i - zero >= 0) {
            dp[i] = (dp[i] + dp[i - zero]) % modulo
        }
        if (i - one >= 0) {
            dp[i] = (dp[i] + dp[i - one]) % modulo
        }

        // if i >= low start counting the total number of strings      
        if (i >= low) {
            ans = (ans + dp[i]) % modulo
        }  
    }

    return ans
};
