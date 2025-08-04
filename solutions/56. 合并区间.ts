function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = []
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    if (result.length === 0 || result[result.length - 1][1] < start) {
      result.push(intervals[i])
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], end)
    }
  }
  return result
};