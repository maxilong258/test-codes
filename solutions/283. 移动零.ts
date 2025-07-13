function moveZeroes(nums: number[]): void {
  let i = 0
  let j = 0
  while (j < nums.length) {
    if (nums[j] === 0) {
      j++
    } else {
      nums[i] = nums[j]
      i++
      j++
    }
  }
  for (let k = i; k < nums.length; k++) {
    nums[k] = 0
  }
};