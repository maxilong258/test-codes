function isValidSudoku(board: string[][]): boolean {
  const rows = new Map<string, boolean>();
  const cols = new Map<string, boolean>();
  const boxes = new Map<string, boolean>();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j];
      if (num === '.') continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows.get(i + num) || cols.get(j + num) || boxes.get(boxIndex + num)) {
        return false;
      }
      rows.set(i + num, true);
      cols.set(j + num, true);
      boxes.set(boxIndex + num, true);
    }
  }
  return true;
}