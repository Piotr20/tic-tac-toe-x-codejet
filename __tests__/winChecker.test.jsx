import "@testing-library/jest-dom";
import { checkWinnerHelper } from "../src/lib/helpers";

describe("checkWinnerHelper", () => {
  it("returns 'X' when X wins", () => {
    const board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "", ""],
    ];

    const winner = checkWinnerHelper(board);

    expect(winner).toBe("X");
  });

  it("returns 'O' when O wins", () => {
    const board = [
      ["X", "O", "X"],
      ["O", "O", "O"],
      ["X", "", ""],
    ];

    const winner = checkWinnerHelper(board);

    expect(winner).toBe("O");
  });

  it("returns draw when there is no winner", () => {
    const board = [
      ["O", "X", "O"],
      ["X", "O", "X"],
      ["X", "O", "X"],
    ];

    const winner = checkWinnerHelper(board);

    expect(winner).toBe("draw");
  });

  it("returns 'X' when X wins on a 4x4", () => {
    const board = [
      ["X", "X", "X", "X"],
      ["O", "O", "O", ""],
      ["X", "O", "O", ""],
      ["X", "O", "X", ""],
    ];

    const winner = checkWinnerHelper(board);

    expect(winner).toBe("X");
  });
});
