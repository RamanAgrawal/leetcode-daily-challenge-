/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    // visited array will be -1 if not visited or index of first visited node
    const visited = Array(edges.length).fill(-1)
    let ans = -1
    
    for (let i = 0; i < edges.length; i++) {
        
        // Since one node could be part of only one solution, only compute if it is not already visited.
        if (visited[i] !== -1) continue;
        
        // detect cycle: check if node is already visited
        // if it was visited and the visited[i] === i, 
        // it means we came to this node during this iteration
        // hence find the length
        
        let currNode = i

        while(currNode !== -1) {
            // if not already visited, mark as visited
            if (visited[currNode] === -1) {
                visited[currNode] = i
                currNode = edges[currNode]
                continue;
            }
            if (visited[currNode] === i) {
                // find the cycle length
                let currCycleLength = 1
                let cycleStartNode = currNode
                currNode = edges[currNode]
                while(currNode !== cycleStartNode) {
                    currCycleLength++
                    currNode = edges[currNode]
                }
                ans = Math.max(currCycleLength, ans)
            }
            break;
        }
    }

    return ans
};
