// function subarraySum(nums: number[], k: number): number {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum === k) {
//         count++
//       }
//     }
//   }
//   return count
// }

function subarraySum(nums: number[], k: number): number {
  let count = 0
  let sum = 0
  let map = new Map<number, number>()
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - k)) {
      count += map.get(sum - k)!
    }
    map.set(sum, (map.get(sum) || 0) + 1)
  }
  return count
}