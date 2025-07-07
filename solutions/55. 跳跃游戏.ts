function canJump(nums: number[]): boolean {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
}

// function canJump(nums: number[]): boolean {
//   const dp = new Array(nums.length).fill(false);
//   dp[0] = true;
//   for (let i = 0; i < nums.length; i++) {
//     if (dp[i]) {
//       for (let j = i + 1; j <= i + nums[i]; j++) {
//         dp[j] = true;
//       }
//     }
//   }
//   return dp[nums.length - 1];
// };