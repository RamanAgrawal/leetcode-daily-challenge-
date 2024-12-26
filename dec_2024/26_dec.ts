
//dp
function findTargetSumWays(nums: number[], target: number): number {
    const sm = nums.reduce((a, b) => a + b, 0);
    if (sm < Math.abs(target) || (sm + target) % 2 !== 0) return 0;
    const totalsum = (sm + target) / 2;

    const dp: number[] = Array(totalsum + 1).fill(0);
    dp[0] = 1;

    for (const num of nums) {
        for (let T = totalsum; T >= num; T--) {
            dp[T] += dp[T - num];
        }
    }
    return dp[totalsum];
}

//bfs
function findTargetSumWays(nums: number[], target: number): number {
    const helper = (arr: number[], target: number, idx: number, sum: number) => {
        if (idx >= arr.length) {
            return sum === target ? 1 : 0
        }

        const subtract = helper(arr, target, idx + 1, sum - arr[idx]);
        const add = helper(arr, target, idx + 1, sum + arr[idx]);
        return subtract+add
    }
    return helper(nums,target,0,0)
};
