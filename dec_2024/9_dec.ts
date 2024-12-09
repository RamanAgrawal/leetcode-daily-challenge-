function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const prefixSum = [0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 !== nums[i - 1] % 2) {
            prefixSum.push(prefixSum[prefixSum.length - 1]);
        } else {
            prefixSum.push(prefixSum[prefixSum.length - 1] + 1);
        }
    }

    return queries.map(([from,to]) => prefixSum[from] === prefixSum[to]);
};
