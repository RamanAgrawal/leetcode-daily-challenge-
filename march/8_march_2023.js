var minEatingSpeed = function(piles, h) {
    let len = piles.length;
    let max = Math.max(...piles);
    if(len==h) {
        return max
    }
    let min =0;
    while(min<max) {
        let mid = Math.floor((min+max)/2);
        let count =0;
        for(let i=0;i<len;i++) {
            count += Math.ceil(piles[i]/mid)
        }
        if(count<=h) {
            max = mid
        } else {
            min = mid+1
        }
    }
    return min
};
