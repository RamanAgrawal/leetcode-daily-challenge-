function waysToSplitArray(nums: number[]): number {
    if (nums.length < 2) return 0
    const totalSum = nums.reduce((a, b) => a + b, 0)
    let leftSum = 0;
    let validSplits = 0
    for (let i = 0; i < nums.length-1; i++) {
        leftSum += nums[i];
        const rightSum = totalSum - leftSum;
        if (leftSum >= rightSum) {
            validSplits++
        }
    }
    return validSplits
};
