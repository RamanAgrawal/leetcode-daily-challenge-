impl Solution {
    pub fn ways_to_split_array(nums: Vec<i32>) -> i32 {
        let mut prefix : Vec<i64> = Vec::new(); 
        let mut curr_sum :i64 = 0; 
        for i in 0..nums.len() {
            curr_sum += nums[i] as i64; 
            prefix.push(curr_sum);
        }
        let mut result = 0 ; 
        for i in 0..nums.len()-1 {
            let first_sum = prefix[i]; 
            let second_sum = prefix[prefix.len()-1] - prefix[i];
            if first_sum >= second_sum {
                result +=1; 
            }
        }
        result 
    }
}



impl Solution {
    pub fn ways_to_split_array(nums: Vec<i32>) -> i32 {
        let n=nums.len();
        if n<2 {
            return 0;
        }
        let total_sum:i32 =nums.iter().sum();
        let mut left_sum = 0;
        let mut valid_splits=0;

        for i in 0..n-1 {
            left_sum+= nums[i];
            let right_sum=total_sum-left_sum;

            if left_sum >= right_sum {
                valid_splits+=1;
            }
        }
        valid_splits
    }
}
