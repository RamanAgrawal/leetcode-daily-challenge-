function continuousSubarrays(nums: number[]): number {
    let left = 0; // Left pointer of the sliding window
    let count = 0; // Total number of valid subarrays
    const minDeque: number[] = []; // Stores indices of the minimum elements
    const maxDeque: number[] = []; // Stores indices of the maximum elements

    for (let right = 0; right < nums.length; right++) {
        // Maintain the max deque
        while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain the min deque
        while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Shrink the window if the max - min exceeds 2
        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            if (maxDeque[0] === left) maxDeque.shift();
            if (minDeque[0] === left) minDeque.shift();
            left++;
        }

        // Count the subarrays ending at `right`
        count += right - left + 1;
    }

    return count;
}
