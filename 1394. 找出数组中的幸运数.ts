function findLucky(arr: number[]): number {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -1;
  for (const [num, count] of map) {
    if (num === count) {
      max = Math.max(max, num);
    }
  }
  return max;
}