function maxScore(s: string): number {
    let ones = 0;
    let res=0
    let zeros=0
    for (let i: number = 0; i < s.length; i++) {
        if (s.charAt(i) === '1') ones++
    }
    for(let i=0;i<s.length-1;i++){
        if(s.charAt(i)==='0'){
            zeros++
        }else{
            ones--
        }
        res=Math.max(res,ones+zeros)
    }
    return res
};
