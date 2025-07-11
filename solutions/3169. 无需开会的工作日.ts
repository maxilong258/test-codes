// function countDays(days: number, meetings: number[][]): number {
//   const meetingDays = new Set<number>();
//   for (const [start, end] of meetings) {
//     for (let i = start; i <= end; i++) {
//       meetingDays.add(i);
//     }
//   }
//   return days - meetingDays.size;
// }

function countDays(days: number, meetings: number[][]): number {
  if (meetings.length === 0) return days;

  // 按起始时间排序
  meetings.sort((a, b) => a[0] - b[0]);

  // 合并重叠区间
  const merged: number[][] = [];
  let [currentStart, currentEnd] = meetings[0];

  for (let i = 1; i < meetings.length; i++) {
    const [start, end] = meetings[i];

    if (start <= currentEnd) {
      // 有重叠，合并区间
      currentEnd = Math.max(currentEnd, end);
    } else {
      // 没有重叠，保存当前区间，开始新区间
      merged.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    }
  }

  // 添加最后一个区间
  merged.push([currentStart, currentEnd]);

  // 计算总的会议天数
  let totalMeetingDays = 0;
  for (const [start, end] of merged) {
    totalMeetingDays += end - start + 1;
  }

  return days - totalMeetingDays;
}
