/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let disNode = Math.floor((n*(n-1))/2);
    let vis = new Set();
    let adl = new Map();
    
    for(let [src,tar] of edges) {
        if(!adl.has(src))
            adl.set(src, []);
        if(!adl.has(tar))
            adl.set(tar, []);
        adl.get(src).push(tar);
        adl.get(tar).push(src);
    }

    for(let [key] of adl) {
        if(!vis.has(key)) {
            vis.add(key);
            let k = 1;
            let q = [key];
            while(q.length) {
                let c_node = q.shift();
                for(let nei of adl.get(c_node) || []) {
                    if(!vis.has(nei)) {
                        vis.add(nei);
                        k++;
                        q.push(nei);
                    }
                }
            }
            disNode -= Math.floor((k*(k-1))/2)
        }
    }
    return disNode;
};
