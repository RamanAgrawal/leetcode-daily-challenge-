function findScore(nums: number[]): number {
    const indexUsed = new Set<number>();

    const sorted = nums.map((value, idx) => ({value, idx})).sort((a,b) => a.value - b.value);
    let score = 0;
    let sortedIdx = 0;

    while(indexUsed.size < nums.length) {
        const elem = sorted[sortedIdx];
        sortedIdx++;
        
        if(indexUsed.has(elem.idx)) {
            continue;
        }

        score += elem.value;
        indexUsed.add(elem.idx);

        if(elem.idx === 0) {
            indexUsed.add(elem.idx + 1);
        } else if (elem.idx === nums.length - 1) {
            indexUsed.add(elem.idx - 1);
        } else {
            indexUsed.add(elem.idx + 1);
            indexUsed.add(elem.idx - 1);
        }

    }


    return score;
};
