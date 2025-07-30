// function maxSubArray(nums: number[]): number {
//   let maxSum = nums[0]
//   let currentSum = 0
//   for (let i = 0; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i])
//     maxSum = Math.max(maxSum, currentSum)
//   }
//   return maxSum
// };

function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let max = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    max = Math.max(max, dp[i])
  }
  return max
};