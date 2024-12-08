function minimumSize(nums: number[], maxOperations: number): number {
    function bin(required) {
        return nums.reduce((acc, el) => {
            if (el > required) {
                const a = Math.ceil(el / required);
                return acc + a - 1;
            }
            return acc;
        }, 0) <= maxOperations;
    }

    let left = 1, right = Math.max(...nums);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (bin(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
