/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
     if(nums.length<=1) return nums
		const getmid = (low,high) => Math.floor((low+high)/2)
		let l=0,h=nums.length-1,mid=getmid(l,h),val=-1;

		while(l<h){
			if((h-l)===2){
				if(nums[l]!==nums[mid]) return nums[l]
				if(nums[mid]!==nums[h])return nums[h]

			}

			if((mid-l+1)%2===1) {
				if(nums[mid]===nums[mid+1]) l=mid+2;
				else h=mid;                      
			}else{

				if(nums[mid]===nums[mid+1]) h=mid-1
				else l=mid-1  
			}
			mid=getmid(l,h)
		}
		if(h===l) return nums[h]
};
