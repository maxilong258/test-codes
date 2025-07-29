function minWindow(s: string, t: string): string {
  const map = new Map()
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1)
  }
  let left = 0
  let right = 0
  let start = 0
  let counter = map.size
  let minLen = Number.MAX_SAFE_INTEGER
  while (right < s.length) {
    const c = s[right]
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) counter--
    }
    right++
    while(counter === 0) {
      if (right - left < minLen) {
        start = left
        minLen = right - left
      }
      const c = s[left]
      if (map.has(c)) {
        map.set(c, map.get(c) + 1)
        if (map.get(c) > 0) counter++
      }
      left++
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substring(start, start + minLen)
};