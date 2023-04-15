/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {

    let dp = Array(k).fill(0)


    for (const pile of piles) {
        const tmp = Array(k).fill(0)

        let sum = 0
        for (let i = 0; i < k && i < pile.length; i++) {
            
            // presum coin values for each pile        
            sum += pile[i]

            for (let j = i; j < k; j++) {
                // for each value in dp array 
                // check what max value we can get 
                // if we'll get i coins from the current pile
                // and all the rest coins from the previous piles
                tmp[j] = Math.max(tmp[j], dp[j], sum + (j - i - 1 >= 0 ? dp[j - i - 1] : 0))
            }
        }
        dp = tmp
    }

    return dp[k -1]
};
