function isValid(word: string): boolean {
  if (word.length < 3) return false;

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let hasVowel = false;
  let hasConsonant = false;

  for (const char of word) {
    // 检查字符是否为数字0-9或英文大小写字母
    const isDigit = char >= "0" && char <= "9";
    const isLetter =
      (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

    if (!isDigit && !isLetter) {
      return false; // 包含无效字符
    }

    // 只有字母才检查元音辅音
    if (isLetter) {
      if (vowels.has(char)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  return hasVowel && hasConsonant;
}
