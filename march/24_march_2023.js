/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    if(n < 2) { return 0 }

    const zero_reachable = [1]
    const neighbour = [[0]]
    let changes = 0

    connections.forEach(([a,b]) => {

        function change_deep(n, ignore) {
            neighbour[n]?.forEach(x => {
                const abs_x = Math.abs(x)
                if(x == ignore || zero_reachable[abs_x]) { return }
                if (x < 0) { changes++ }
                zero_reachable[abs_x] = 1
                change_deep(abs_x, n)
            })
        }

        if (zero_reachable[b]) {
            zero_reachable[a] = 1

            change_deep(a, b)
        } else if(zero_reachable[a]) {
            changes++
            zero_reachable[b] = 1

            change_deep(b, a)
        }  else {
            if(neighbour[b]) { neighbour[b].push(a) } 
            else { neighbour[b] = [a] }

            if(neighbour[a]) { neighbour[a].push(-b) } 
            else { neighbour[a] = [-b] }
        }
    })

    return changes
};
