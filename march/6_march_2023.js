/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let set = new Map();
    for(let i=0;i<arr.length;i++){
        set.set(arr[i],1)
    }
    let count=0;
    let num=0;
    while(count<k){
        num++;
        if(!set.get(num)){
            count++;
            if(count==k){
                return num
            }
        }

    }
};
