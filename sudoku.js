function isValidSudoku(grid) {
  const gridLenth = grid.length;
  const rootLength = Math.sqrt(gridLenth);

  //function that check for duplicates
  const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

  //Check the rows and columns first
  for (let i = 0; i < gridLenth; i++) {
    const row = [];
    const column = [];
    for (let j = 0; j < gridLenth; j++) {
      row.push(grid[i][j]);
      column.push(grid[j][i]);
    }
    //for each row and col we check if we have duplicates values
    if (hasDuplicates(row) || hasDuplicates(column)) {
      return false;
    }
  }

  // Then we check the children squares that square parent has
  for (let i = 0; i < gridLenth; i += rootLength) {
    for (let j = 0; j < gridLenth; j += rootLength) {
      const childSquare = [];
      for (let k = i; k < i + rootLength; k++) {
        for (let l = j; l < j + rootLength; l++) {
          childSquare.push(grid[k][l]);
        }
      }
      if (hasDuplicates(childSquare)) {
        return false;
      }
    }
  }

  return true;
}

const goodSudokuPuzzle = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const badSudokuPuzzle = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 1, 9], // Error: Two 1's in the same row
];

console.log(isValidSudoku(goodSudokuPuzzle));
console.log(isValidSudoku(badSudokuPuzzle));
