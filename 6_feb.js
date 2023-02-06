var shuffle = function(nums, n) {

    let arr=[]
    
    for(let j = 0;j<n;j++){
        arr.push(nums[j])
        arr.push(nums[n+j])
    }
    return arr
};
