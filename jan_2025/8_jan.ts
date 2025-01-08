function countPrefixSuffixPairs(words: string[]): number {
    function isPrefixAndSuffix(str1: string, str2: string): boolean {
        return str2.startsWith(str1) && str2.endsWith(str1);
    }

    let count = 0;

    // Nested loop to check all pairs
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // Check length before calling the helper function
            if (words[i].length <= words[j].length && isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
}
