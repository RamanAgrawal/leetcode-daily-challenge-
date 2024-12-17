function repeatLimitedString(s: string, repeatLimit: number): string {
    const freq = new Map<string, number>();

    // Count frequency of each character
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Sort characters in descending order (lexicographically largest first)
    const sortedChars = Array.from(freq.keys()).sort((a, b) => b.localeCompare(a));

    let result = '';
    let i = 0; // Pointer to sortedChars
    let prevChar = '';
    let prevCount = 0;

    while (i < sortedChars.length) {
        const char = sortedChars[i];
        const count = freq.get(char)!;

        if (prevChar === char && prevCount >= repeatLimit) {
            // If we cannot append `char` anymore, move to the next largest character
            if (i + 1 < sortedChars.length) {
                const nextChar = sortedChars[i + 1];
                result += nextChar;
                freq.set(nextChar, freq.get(nextChar)! - 1);
                if (freq.get(nextChar) === 0) {
                    sortedChars.splice(i + 1, 1);
                }
                prevChar = nextChar;
                prevCount = 1;
            } else {
                // If no other character is available, break the loop
                break;
            }
        } else {
            // Append `char` up to the repeat limit or its remaining count
            const appendCount = Math.min(repeatLimit, count);
            result += char.repeat(appendCount);
            freq.set(char, count - appendCount);

            // Update previous character tracking
            prevChar = char;
            prevCount = appendCount;

            if (freq.get(char) === 0) {
                sortedChars.splice(i, 1); // Remove char from sorted list if exhausted
            }
        }
    }

    return result;
}
