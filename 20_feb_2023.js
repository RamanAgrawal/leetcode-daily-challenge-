var searchInsert = function (nums, target) {

    let low = 0;
    let high = nums.length - 1;
	
    while (low <= high) {
        let mid =Math.floor(low + (high - low) / 2);
        if (nums[mid] > target) {
            high = --mid;
        } else if (nums[mid] < target) {
            low = ++mid;
        } else return mid;
    }
    return low;
};
