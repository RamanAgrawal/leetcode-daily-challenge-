/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let result = 0
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            count += 1
            result += count
        } else {
            count = 0
        }
    }
    return result
    
};
