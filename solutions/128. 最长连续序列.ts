function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxLength = 0;
  for (const num of set) {
    if (set.has(num - 1)) continue;
    let currentNum = num;
    let currentLength = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentLength++;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};