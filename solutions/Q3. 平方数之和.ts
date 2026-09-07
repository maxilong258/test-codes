function judgeSquareSum(c: number): boolean {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    // 注意：在 JS/TS 中，c 最大为 2^31 - 1，
    // a^2 + b^2 的最大值不会超过 JS number 的安全整数上限，所以直接算不会溢出
    const sum = a * a + b * b;

    if (sum === c) {
      return true;
    } else if (sum < c) {
      a++;
    } else {
      b--;
    }
  }

  return false;
}