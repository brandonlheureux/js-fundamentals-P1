function exercise13() {
  // Exercise 13
  //
  // The Fibonacci sequence is a sequence of numbers where every value is the sum
  // of the previous 2 values.
  // It looks like this:
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  //
  // Why?
  // 13 + 21 = 34
  // 8 + 13 = 21
  // 5 + 8 = 13
  //
  // Every number in the sequence is the result of adding the two numbers to
  // the left. The sequence starts with "0, 1", and every number beyond that
  // can be calculated by adding the previous 2 numbers.
  //
  // Write a program which calculates the 50th number in the fibonacci sequence
  // (The numbers get big quickly!)
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // passing values around
  // let previousResult = 0;
  // let currentResult = 1;
  // let nextResult = 0;

  // for (let i = 0; i < 48; i++) {
  //   nextResult = previousResult + currentResult;
  //   previousResult = currentResult;
  //   currentResult = nextResult;
  // }
  // console.log(currentResult);

  // holding all into one array
  let fib = [0, 1];
  for (let i = 2; i <= 49; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  console.log(fib.pop());

  // a memoized fib recursive function
  // function fibonacci(num, memo) {
  //   memo = memo || {};

  //   if (memo[num]) return memo[num];
  //   if (num <= 1) return 1;

  //   return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  // }
  // console.log(fibonacci(48));

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
// yarn test exercise-13

module.exports = exercise13;
