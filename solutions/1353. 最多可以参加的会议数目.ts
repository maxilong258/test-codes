// function maxEvents(events: number[][]): number {
//   events.sort((a, b) => a[1] - b[1]);
//   const set = new Set<number>();
//   for (const event of events) {
//     for (let i = event[0]; i <= event[1]; i++) {
//       if (!set.has(i)) {
//         set.add(i);
//         break;
//       }
//     }
//   }
//   return set.size;
// }

function maxEvents(events: number[][]): number {  
  // 自定义最小堆
  class MinHeap {
    private heap: number[] = [];
    
    enqueue(val: number) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
    }
    
    dequeue(): number | undefined {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.pop();
      
      const top = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.heapifyDown(0);
      return top;
    }
    
    front(): number | undefined {
      return this.heap[0];
    }
    
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
    
    private heapifyUp(index: number) {
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }
    
    private heapifyDown(index: number) {
      while (true) {
        let minIndex = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        
        if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
          minIndex = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
          minIndex = right;
        }
        
        if (minIndex === index) break;
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        index = minIndex;
      }
    }
  }


  let maxDay = 0;
  for (const e of events) {
    maxDay = Math.max(maxDay, e[1]);
  }
  events.sort((a, b) => a[0] - b[0]);
  
  const pq = new MinHeap();
  const n = events.length;
  let ans = 0;
  for (let i = 1, j = 0; i <= maxDay; i++) {
    // 添加所有在当前天开始的事件
    while (j < n && events[j][0] <= i) {
      pq.enqueue(events[j][1]);
      j++;
    }
    // 移除所有已经结束的事件
    while (!pq.isEmpty() && pq.front()! < i) {
      pq.dequeue();
    }
    // 选择结束时间最早的事件
    if (!pq.isEmpty()) {
      pq.dequeue();
      ans++;
    }
  }
  return ans;
}