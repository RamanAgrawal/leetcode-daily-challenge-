function shiftingLetters(s: string, shifts: number[][]): string {

    let chars = s.split('');
    let netShift = new Array(s.length).fill(0);

    for(let [start, end, dir] of shifts){

        let change = dir === 1 ? 1 : -1;
        netShift[start] += change;
        if(end+1 < s.length){
            netShift[end+1] -= change;
        }
    }

    //cummulative sum
    for(let index = 1; index < netShift.length; index++){
        netShift[index] += netShift[index-1];
    }

    for(let index = 0; index < chars.length; index++){
        let charCode = chars[index].charCodeAt(0)-97;
        const currentShift = ( charCode + netShift[index] % 26 + 26) % 26;
        chars[index] = String.fromCharCode(currentShift + 97);
    }
    return chars.join('');
};
