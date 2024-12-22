function leftmostBuildingQueries(heights: number[], queries: [number, number][]): number[] {
    const output = new Array<number>(queries.length).fill(-1);
    // Assume Alice is always to left of Bob
    const missed = new Map<number, typeof queries[number][]>(); // BobIndex => [maxHeight(Alice, Bob), queryIndex][]
    queries.forEach((q, i) => {
        const [L, R] = q.sort((a, b) => a - b);
        if (L === R || heights[L] < heights[R]) {
            output[i] = R;
        } else {
            const element: typeof queries[number] = [Math.max(heights[L], heights[R]), i];
            missed.get(R)?.push(element) || missed.set(R, [element]);
        }
    });
    const minHeap = new Heap<[number, number]>((a, b) => a[0] - b[0]); // a, b = [maxHeight(Alice, Bob), queryIndex]
    heights.forEach((h, i) => {
        for (const [maxHeight, queryIndex] of (missed.get(i) || [])) {
            minHeap.enqueue([maxHeight, queryIndex]);
        }
        while (minHeap.size > 0 && minHeap.front()![0] < h) {
            const queryIndex = minHeap.dequeue()![1];
            output[queryIndex] = i;
        }
    });
    return output;
}

class Heap<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => number;
    /**
     * Construct a new Heap with the given comparator.
     * @param comparator - The comparator to use when ordering values in the heap.
     * For MinHeap use (a, b) => a - b, for MaxHeap use (a, b) => b - a
     */
    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }
    get size() {
        return this.heap.length;
    }
    private bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (this.comparator(element, parent) >= 0) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    private bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (this.comparator(leftChild, element) < 0) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (!swap && this.comparator(rightChild, element) < 0) ||
                    (swap && this.comparator(rightChild, leftChild!) < 0)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
    enqueue(val: T) {
        this.heap.push(val);
        this.bubbleUp();
    }
    dequeue(): T | undefined {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end!;
            this.bubbleDown();
        }
        return max;
    }
    front(): T | undefined {
        return this.heap[0];
    }
    toArray() {
        return this.heap;
    }
}
