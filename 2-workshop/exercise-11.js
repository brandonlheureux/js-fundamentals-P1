function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 0; i < 8; i++) {
    console.log(i % 2 ? "_#_#_#_#" : "#_#_#_#_");
  }

  // newline???
  // let grid = "";
  // for (let i = 0; i < 8; i++) {
  //   grid = grid + ((i % 2) ? "_#_#_#_#" : "#_#_#_#_") + "\n";
  // }
  // console.log(grid.trim());
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
