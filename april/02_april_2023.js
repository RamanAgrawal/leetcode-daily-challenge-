/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let pairs=[]
    potions=potions.sort((a,b)=>{return a-b})

    for(let i=0;i<spells.length;i++){
        let left=0;
        let right=potions.length-1,spell=spells[i];
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            let product=spell*potions[mid]
            if(product>=success){
                right=mid-1

            }else{
                left=mid+1
            }
        }
        pairs[i]=potions.length-left

    }
    return pairs
}
