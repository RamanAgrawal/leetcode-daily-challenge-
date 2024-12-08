function maxTwoEvents(events: number[][]): number {
    // Sort events by end time
    events.sort((a, b) => a[1] - b[1]);

    let maxSoFar = 0; // Maximum value seen so far
    let result = 0;
    const dp: number[] = []; // Store maximum values at each event

    for (let i = 0; i < events.length; i++) {
        const [start, end, value] = events[i];

        // Binary search for the latest non-overlapping event
        let left = 0, right = i - 1, bestIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][1] < start) {
                bestIndex = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Calculate the maximum sum
        const maxWithCurrent = value + (bestIndex >= 0 ? dp[bestIndex] : 0);
        result = Math.max(result, maxWithCurrent);

        // Update dp and maxSoFar
        maxSoFar = Math.max(maxSoFar, value);
        dp[i] = maxSoFar;
    }

    return result;
}
