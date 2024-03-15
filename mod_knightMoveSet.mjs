export const knightsAvailableMoves = ([i, j]) => {
  //current location
  let availableMoves = [];

  if (i > 1 && j > 0) {
    let array = [i - 2, j - 1];
    if (array[0] === array[1]) {
      availableMoves.push(array);
    } else {
      let reversed = [array[1], array[0]];
      availableMoves.push(array, reversed);
    }
  }
  if (i > 1 && j < 7) {
    let array = [i - 2, j + 1];
    if (array[0] === array[1]) {
      availableMoves.push(array);
    } else {
      let reversed = [array[1], array[0]];
      availableMoves.push(array, reversed);
    }
  }
  if (i < 6 && j > 0) {
    let array = [i + 2, j - 1];
    if (array[0] === array[1]) {
      availableMoves.push(array);
    } else {
      let reversed = [array[1], array[0]];
      availableMoves.push(array, reversed);
    }
  }
  if (i < 6 && j < 7) {
    let array = [i + 2, j + 1];
    if (array[0] === array[1]) {
      availableMoves.push(array);
    } else {
      let reversed = [array[1], array[0]];
      availableMoves.push(array, reversed);
    }
  }
  return availableMoves;
};
