/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let s2=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==='*'){
            s2.pop()
        }else{
            s2.push(s[i])
        }
    }
    return s2.join('')
};
