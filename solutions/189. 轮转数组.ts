// function rotate(nums: number[], k: number): void {
//   const n = nums.length
//   k = k % n
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop()!)
//   }
// }

function rotate(nums: number[], k: number): void {
  const n = nums.length
  k = k % n
  const temp = nums.slice(n - k)
  for (let i = n - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i]
  }
  for (let i = 0; i < k; i++) {
    nums[i] = temp[i]
  }
}