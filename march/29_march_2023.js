/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    const satis=satisfaction.sort((a,b)=>{return a-b})
    let sufSum=0,currAns=0,maxAns=0;
    for(let i=satis.length-1;i>=0;i--){
        currAns+=sufSum+satis[i];
        sufSum+=satis[i]
        if(currAns>maxAns){
            maxAns=currAns
        }else if(currAns<0){
            break
        }
    }
    return maxAns
};
