function findAnagrams(s: string, p: string): number[] {
  let left: number = 0
  let right: number = p.length
  const res: number[] = []
  while (right <= s.length) {
    const sub = s.slice(left, right)
    if (isAnagram(sub, p)) {
      res.push(left)
    }
    left++
    right++
  }
  return res
  function isAnagram(s: string, t: string): boolean {
    const sCount = new Array(26).fill(0)
    const tCount = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
      sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    for (let i = 0; i < t.length; i++) {
      tCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    return sCount.toString() === tCount.toString()
  }
}