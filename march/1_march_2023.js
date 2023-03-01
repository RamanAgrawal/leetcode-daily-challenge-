var sortArray = function(nums) {
    const mergeSort=(arr,l,r)=>{
        if(l<r){
            let mid=Math.floor(l+(r-l)/2);
            mergeSort(arr,l,mid);
            mergeSort(arr,mid+1,r);
            merge(arr,l,mid,r)
        }
    }
    let arr2=[];
    const merge=(arr,l,mid,r)=>{
        let i=l,j=mid+1,k=l;
        while(i<=mid&&j<=r){
            if(arr[i]<arr[j]){
                arr2[k]=arr[i++];
            }else{
                arr2[k]=arr[j++]
            }
            k++
        }
        if(i>mid){
            while(j<=r){
                arr2[k++]=arr[j++]
            }
        }else{
            while(i<=mid){
                arr2[k++]=arr[i++]
            }
        }
        for(let i=l;i<=r;i++){
            arr[i]=arr2[i]
        }
    }
    mergeSort(nums,0,nums.length-1)
    return nums
};
