type Player = "X" | "O" | null;

export function checkWinnerHelper(board: Player[][]) {
  const n = board.length;

  // Check rows
  for (let i = 0; i < n; i++) {
    if (board[i][0] && board[i].every((cell) => cell === board[i][0])) {
      console.log(`Row win detected at row ${i}`);
      return board[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < n; j++) {
    let columnWin = true;
    for (let i = 0; i < n; i++) {
      if (board[i][j] !== board[0][j]) {
        columnWin = false;
        break;
      }
    }
    if (columnWin && board[0][j]) {
      console.log(`Column win detected at column ${j}`);
      return board[0][j];
    }
  }

  // Check main diagonal
  let mainDiagonalWin = true;
  for (let i = 0; i < n; i++) {
    if (board[i][i] !== board[0][0]) {
      mainDiagonalWin = false;
      break;
    }
  }
  if (mainDiagonalWin && board[0][0]) {
    console.log(`Main diagonal win detected`);
    return board[0][0];
  }

  // Check anti-diagonal
  let antiDiagonalWin = true;
  for (let i = 0; i < n; i++) {
    if (board[i][n - 1 - i] !== board[0][n - 1]) {
      antiDiagonalWin = false;
      break;
    }
  }
  if (antiDiagonalWin && board[0][n - 1]) {
    console.log(`Anti-diagonal win detected`);
    return board[0][n - 1];
  }

  //check for draw
  let isDraw = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!board[i][j]) {
        isDraw = false;
        break;
      }
    }
    if (!isDraw) break;
  }
  if (isDraw) {
    console.log(`Game is a draw`);
    return "draw";
  }

  //No winner
  console.log(`No winner detected`);
  return null;
}
