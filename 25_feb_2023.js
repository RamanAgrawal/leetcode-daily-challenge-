var maxProfit = function(prices) {
    if(prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minBuy);
    }
    return profit;
};
