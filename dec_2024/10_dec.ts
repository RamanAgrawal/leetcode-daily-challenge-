function maximumLength(s: string): number {

    const countOccurrences = (substring: string): number => {
        let count = 0;
        for (let i = 0; i <= s.length - substring.length; i++) {
            if (s.substring(i, i + substring.length) === substring) {
                count++;
            }
        }
        return count;
    };

    let maxLength = -1;

    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            const substring = s.substring(i, i + len);
            if (new Set(substring).size === 1) {
                if (countOccurrences(substring) >= 3) {
                    maxLength = Math.max(maxLength, len);
                }
            }
        }
    }

    return maxLength;
};
