function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
    // Helper function to calculate the diameter of a tree
    function calculateDiameter(edges: number[][], n: number): number {
        const graph: Map<number, number[]> = new Map();

        // Build adjacency list
        for (const [u, v] of edges) {
            if (!graph.has(u)) graph.set(u, []);
            if (!graph.has(v)) graph.set(v, []);
            graph.get(u)!.push(v);
            graph.get(v)!.push(u);
        }

        // BFS to find the farthest node and its distance
        const bfs = (start: number): [number, number] => {
            const dist: number[] = Array(n).fill(-1);
            dist[start] = 0;
            const queue: number[] = [start];
            let farthestNode = start;
            let maxDist = 0;

            while (queue.length > 0) {
                const current = queue.shift()!;
                for (const neighbor of graph.get(current) || []) {
                    if (dist[neighbor] === -1) {
                        dist[neighbor] = dist[current] + 1;
                        queue.push(neighbor);
                        if (dist[neighbor] > maxDist) {
                            maxDist = dist[neighbor];
                            farthestNode = neighbor;
                        }
                    }
                }
            }

            return [farthestNode, maxDist];
        };

        // Two-pass BFS to find the diameter
        const [farthestNode] = bfs(0);
        const [, diameter] = bfs(farthestNode);
        return diameter;
    }

    const n = edges1.length + 1; // Number of nodes in the first tree
    const m = edges2.length + 1; // Number of nodes in the second tree

    const diameter1 = calculateDiameter(edges1, n);
    const diameter2 = calculateDiameter(edges2, m);

    // Compute the minimum possible diameter after connecting the two trees
    return Math.max(diameter1, diameter2, Math.floor((diameter1 + 1) / 2) + Math.floor((diameter2 + 1) / 2) + 1);
};
