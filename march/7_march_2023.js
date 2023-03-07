/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let l = 1;
    let high = Number.MAX_SAFE_INTEGER;
    let ans = 0;
    
    while(l <= high) {
        let mid = Math.floor(l + (high - l) / 2); // to prevent overfl
        
        if(isPossible(time, mid, totalTrips)) {
            ans = mid
            high = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};

function isPossible(arr, mid, totalTrips) {
    let trips = 0;
    for (let i = 0; i < arr.length; i++) {
      trips += Math.floor(mid / arr[i]);
    }
    return trips >= totalTrips;
}
