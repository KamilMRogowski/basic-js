const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineSweeper = matrix.map((row) => row.slice().fill(0));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === true) {
        mineSweeper[row][col]--;
        for (let mineRow = row - 1; mineRow <= row + 1; mineRow++) {
          if (mineRow >= 0) {
            for (let mineCol = col - 1; mineCol <= col + 1; mineCol++) {
              if (mineCol >= 0) {
                mineSweeper[mineRow][mineCol]++;
              }
            }
          }
        }
      }
    }
  }
  return mineSweeper;
}

module.exports = {
  minesweeper,
};
