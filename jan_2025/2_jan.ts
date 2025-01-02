const isVowel = (ch: string) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase());
}

function vowelStrings(words: string[], queries: number[][]): number[] {
    const m = words.length;
    const prefixsum: number[] = new Array(m).fill(0);
    let cnt = 0;

    for (let i = 0; i < m; i++) {
        const word = words[i];
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            cnt++;
        }
        prefixsum[i] = cnt;
    }

    return queries.map(([l, r]) => {
        return prefixsum[r] - (l > 0 ? prefixsum[l - 1] : 0);
    });
}
