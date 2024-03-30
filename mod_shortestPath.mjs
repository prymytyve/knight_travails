import { knightsAvailableMoves } from "./mod_knightMoveSet.mjs";

export const shortestPath = (board, [i, j], [i2, j2]) => {
  if ([i, j].toString() === [i2, j2].toString()) return "Error";
  let currentBoard = JSON.parse(JSON.stringify(board));
  currentBoard[i][j] = 1;
  let boardInfo = { board: currentBoard, moves: [[i, j]] };
  let pathInfo = findPath(boardInfo, [i2, j2]);
  const movesNum = pathInfo.moves.length - 1;
  let arrayString = "";
  let returnThis =
    "You made it in " + movesNum + " move(s)! Here's your path: ";
  for (let i = 0; i < pathInfo.moves.length; i++) {
    if (i === pathInfo.moves.length - 1) {
      arrayString += "[" + pathInfo.moves[i] + "]";
    } else {
      arrayString += "[" + pathInfo.moves[i] + "], ";
    }
  }
  return returnThis + arrayString;
};

function availableMoves(board, [i, j]) {
  let array = [];
  let moves = knightsAvailableMoves([i, j]);
  let filtered = moves.filter((move) => board[move[0]][move[1]] !== 1);
  return filtered;
}

function findPath(boardObj, [x2, y2]) {
  let queue = [];
  function findPaths(boardObj, [x2, y2]) {
    let n = boardObj.moves.length - 1;
    let availableMovesArr = availableMoves(boardObj.board, boardObj.moves[n]);
    let found = availableMovesArr.find(
      (move) => move.toString() === [x2, y2].toString()
    );
    if (found !== undefined) {
      boardObj.moves.push(found);
      return boardObj;
    } else if (found === undefined) {
      availableMovesArr.forEach((move) => {
        const i = move[0],
          j = move[1];
        let currentMoveObj = JSON.parse(JSON.stringify(boardObj));
        currentMoveObj.board[i][j] = 1;
        currentMoveObj.moves.push([i, j]);
        queue.push(currentMoveObj);
      });
      let nextMove = queue.shift();
      return findPaths(nextMove, [x2, y2]);
    }
  }
  return findPaths(boardObj, [x2, y2]);
}
