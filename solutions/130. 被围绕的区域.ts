function solve(board: string[][]): void {
  const m = board.length; 
  const n = board[0].length;
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  
  // DFS标记与边界相连的'O'
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] === "X") {
      return;
    }
    visited[i][j] = true;
    for (const [dx, dy] of directions) {
      dfs(i + dx, j + dy);
    }
  };
  
  // 从边界开始DFS，标记所有与边界相连的'O'
  // 第一行和最后一行
  for (let j = 0; j < n; j++) {
    if (board[0][j] === "O" && !visited[0][j]) {
      dfs(0, j);
    }
    if (board[m-1][j] === "O" && !visited[m-1][j]) {
      dfs(m-1, j);
    }
  }
  
  // 第一列和最后一列
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O" && !visited[i][0]) {
      dfs(i, 0);
    }
    if (board[i][n-1] === "O" && !visited[i][n-1]) {
      dfs(i, n-1);
    }
  }
  
  // 将所有未被标记的'O'替换为'X'
  for (let i = 0; i < m; i++) { 
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && !visited[i][j]) {
        board[i][j] = "X";
      }
    }
  }
};
