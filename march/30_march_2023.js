/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var solve = function(s1, s2, map) {
    if (s1 === s2) {
        return true
    }
    let key = s1 + '_' + s2;
    if (map[key] != undefined) {
        return map[key]
    }
    let map1 = {}
    let map2 = {}
    for (let i=0; i<s1.length; i++) {
        map1[s1[i]] = (map1[s1[i]] || 0) + 1
        map2[s2[i]] = (map2[s2[i]] || 0) + 1
    }
    for (let e in map1) {
        if(map1[e] !== map2[e]) {
            return map[key] = false
        } 
    }

    let n = s1.length
    for (let i = 1; i<n; i++) {
         if (
             solve(s1.slice(0,i),s2.slice(0,i), map) && solve(s1.slice(i), s2.slice(i), map)
         ||
            solve(s1.slice(0,i), s2.slice(n-i), map) && solve(s1.slice(i), s2.slice(0,n-i), map)
         ) {
             return map[key] = true
         }
    }
    return map[key] = false
}
    
var isScramble = function(s1, s2) {
  return solve(s1, s2, {})  
};
