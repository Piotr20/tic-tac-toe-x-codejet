type Args = {
  cells: (string | null)[][];
  index: number;
  boardSize: number;
  turn: {
    name: string;
    marker: string;
  };
};
export function handleMoveHelper({ cells, index, turn, boardSize }: Args) {
  let newCells = [...cells];

  newCells = newCells.map((row, rowIndex) => {
    if (rowIndex === Math.floor(index / boardSize)) {
      return row.map((cell: string | null, columnIndex: number) => {
        if (columnIndex === Math.floor(index % boardSize) && !cell) {
          return turn.marker;
        }
        return cell;
      });
    }
    return row;
  });

  return newCells;
}
