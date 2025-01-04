function countPalindromicSubsequence(s: string): number {
    const n = s.length;
    const uniquePalindromes = new Set<string>();

    // Arrays to track the first and last occurrence of each character
    const first: number[] = Array(26).fill(-1);
    const last: number[] = Array(26).fill(-1);

    // Populate first and last occurrence arrays
    for (let i = 0; i < n; i++) {
        const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (first[index] === -1) {
            first[index] = i;
        }
        last[index] = i;
    }

    // Iterate over all lowercase letters
    for (let i = 0; i < 26; i++) {
        if (first[i] !== -1 && last[i] !== -1 && first[i] < last[i]) {
            // Collect unique characters between first[i] and last[i]
            const middleChars = new Set<string>();
            for (let j = first[i] + 1; j < last[i]; j++) {
                middleChars.add(s[j]);
            }
            // Create palindromic subsequences
            for (const char of middleChars) {
                uniquePalindromes.add(String.fromCharCode(i + 'a'.charCodeAt(0)) + char + String.fromCharCode(i + 'a'.charCodeAt(0)));
            }
        }
    }

    return uniquePalindromes.size;
}
