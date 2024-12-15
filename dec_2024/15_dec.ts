function getPromotedAverage(class1: number[]) {
  return ((class1[0] + 1) / (class1[1] + 1)) - (class1[0] / class1[1])
}

function isSuperiorThan(class1: number, class2: number, classes: number[][]) {
  return (
    getPromotedAverage(classes[class1]) > getPromotedAverage(classes[class2])
  );
}

function push(heap: number[], newJump: number, classes: number[][]) {
  let top = heap.length;
  heap[top] = newJump;
  let now = top;
  let temp: number;
  let next = Math.floor((top - 1) / 2);

  while (now) {
    if (isSuperiorThan(heap[now], heap[next], classes)) {
      temp = heap[next];
      heap[next] = heap[now];
      heap[now] = temp;
      now = next;
      next = Math.floor((now - 1) / 2);
    } else return;
  }
}

function pop(heap: number[], classes: number[][]) {
  let top = heap.length - 1;
  heap[0] = heap[top];
  heap.pop();
  let now = 0;
  let next: number;
  let temp: number;
  let left = 1;
  let right = 2;
  while (left < top) {
    next =
      top == right
        ? left
        : isSuperiorThan(heap[left], heap[right], classes)
          ? left
          : right;
    if (isSuperiorThan(heap[next], heap[now], classes)) {
      temp = heap[next];
      heap[next] = heap[now];
      heap[now] = temp;
      now = next;
      left = now * 2 + 1;
      right = now * 2 + 2;
    } else return;
  }
}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const heap: number[] = []
  let ans: number = 0
  let index: number

  for (let i = 0; i < classes.length; i++) {
    push(heap, i, classes)
  }

  for (let i = 0; i < extraStudents; i++) {
    index = heap[0];
    if (classes[index][0] === classes[index][1]) return 1;
    classes[index][0]++;
    classes[index][1]++;
    pop(heap, classes);
    push(heap, index, classes);
  }

  for (let i = 0; i < classes.length; i++) {
    ans += classes[i][0] / classes[i][1]
  }

  return ans / classes.length
};
