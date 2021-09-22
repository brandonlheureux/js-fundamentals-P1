function exercise6_5() {
  // Exercise 6.5
  //
  // Write a loop that will iterate from 0 to 10.
  // For each iteration, it should check whether a number is even or odd
  // and display that state along with the number.
  // e.g.
  // 0 is even
  // 1 is odd
  // 2 is even
  // ...
  // many other possibilities here.
  //
  // Use interpolation to build your output string
  // e.g. `${number} is odd`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 0; i <= 10; i++) {
    i % 2 ? console.log(`${i} is odd`) : console.log(`${i} is even`)
  }
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
// yarn test exercise-6.5

module.exports = exercise6_5;
