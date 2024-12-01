function checkIfExist(arr: number[]): boolean {
    const set=new Set<number>();
    for(let num of arr){
        if(set.has(2*num) || (num % 2 === 0 && set.has(num/2))){
            return true;
        }
        set.add(num)
    }
    return false
};
