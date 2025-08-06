function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const result = new Array(n).fill(1)
  let left = 1
  let right = 1
  for (let i = 0; i < n; i++) {
    result[i] *= left
    left *= nums[i]
  }
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right
    right *= nums[i]
  }
  return result
}