function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 使用该写法防止 (left + right) 导致整型溢出
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // 目标值比中间值大，去右边区间找
    } else {
      right = mid - 1; // 目标值比中间值小，去左边区间找
    }
  }

  return -1; // 遍历完未找到，返回 -1
}