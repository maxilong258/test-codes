function isValid(s: string): boolean {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(') {
      stack.push(')')
    } else if (char === '[') {
      stack.push(']')
    } else if (char === '{') {
      stack.push('}')
    } else {
      const top = stack.pop()
      if (top !== char) {
        return false
      }
    }
  }
  return stack.length === 0
};