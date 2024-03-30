import createBoard from "./mod_chessBoard.mjs";
import { shortestPath } from "./mod_shortestPath.mjs";

let board = createBoard();

// const knightMoves = ([i, j], [i2, j2]) => {
//   let currentBoard = board;
//   currentBoard[i][j] = 1;
// };

console.log(shortestPath(board, [0, 0], [1, 7]));
