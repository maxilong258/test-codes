// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let left = 0
//   let right = k
//   const res: number[] = []
//   while (right <= nums.length) {
//     const sub = nums.slice(left, right)
//     res.push(Math.max(...sub))
//     left++
//     right++
//   }
//   return res
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
  // 使用单调队列优化，时间复杂度O(n)
  const res: number[] = []
  const deque: number[] = [] // 存储下标，保证队列单调递减

  for (let i = 0; i < nums.length; i++) {
    // 移除队头不在窗口内的元素
    if (deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    // 保证队列单调递减，移除比当前元素小的队尾元素
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    // 当窗口形成后，记录最大值
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res
}