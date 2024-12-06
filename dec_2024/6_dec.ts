function maxCount(banned: number[], n: number, maxSum: number): number {
    const bannedSet = new Set(banned); // Use a Set for efficient lookups
    let validNumbers: number[] = [];

    // Collect numbers not in the banned list
    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            validNumbers.push(i);
        }
    }

    // Sort the valid numbers
    validNumbers.sort((a, b) => a - b);

    let currentSum = 0;
    let count = 0;

    // Select numbers while keeping within maxSum
    for (const num of validNumbers) {
        if (currentSum + num <= maxSum) {
            currentSum += num;
            count++;
        } else {
            break; // Stop if adding the current number exceeds maxSum
        }
    }

    return count;
}
