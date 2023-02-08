var jump = function(nums) {
    
         if(nums.length==1)return 0
        let max = 0;
        let curr = 0;
        let count = 0;
        for(let i = 0 ; i < nums.length - 1 ; i++){
            max = Math.max(max , i + nums[i]);
            if(curr == i){
                curr = max;
                count++;
            }
            if(curr>nums.length-1){
                return count;
            }
        }
        return count;
    
};
