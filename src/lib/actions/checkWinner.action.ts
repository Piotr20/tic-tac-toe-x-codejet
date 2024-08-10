"use server";

type Player = "X" | "O" | null;

export function checkWinner(board: Player[][]): Player | null {
  const n = board.length;

  // Check rows
  for (let i = 0; i < n; i++) {
    if (board[i][0] && board[i].every((cell) => cell === board[i][0])) {
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
    return board[0][n - 1];
  }

  // No winner
  return null;
}
