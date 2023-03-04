/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let result =0;
    let min = -1;
    let max = -1;
    let l = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < minK || nums[i] > maxK) l = i;
        if(nums[i] == minK) min = i;
        if(nums[i] == maxK) max = i;

        let count = Math.min(min, max)-l;
        result += Math.max(0, count);
    }
    return result;
};
