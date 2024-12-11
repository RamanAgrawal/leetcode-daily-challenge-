function maximumBeauty(nums: number[], k: number): number {
     nums.sort((a, b) => a - b);
        let len = 0;
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] - nums[l] <= 2 * k) {
                len = Math.max(len, r - l + 1);
            } else {
                l++;
            }
        }
        return len;
};
