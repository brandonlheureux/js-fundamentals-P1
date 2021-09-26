function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
  }

  // // hmm
  // for (let i = 1; i <= 7; i++) {
  //   let str = "";
  //   for (let j = 1; j <= i; j++) {
  //     str = str + "#";
  //   }
  //   console.log(str);
  // }

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
// yarn test exercise-10

module.exports = exercise10;
