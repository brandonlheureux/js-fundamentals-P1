function exercise9() {
  // Exercise 9
  //
  // Write a program that goes through every number from 1 to 100, and follows the following rules:
  //   - If the number is divisible by 3 (eg. 6), print "Fizz"
  //   - If the number is divisible by 5 (eg. 10), print "Buzz"
  //   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
  //   - For all other numbers, print the number itself.
  // e.g.
  //
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // 16
  // ...
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 1; i <= 100; i++) {
    // // 1.a using question requirements as conditions
    // if (!(i % 3) && i % 5) console.log("Fizz");
    // else if (!(i % 5) && i % 3) console.log("Buzz");
    // else if (!(i % 3) && !(i % 5)) console.log("FizzBuzz");
    // else console.log(i);

    // 1.b - less conditionals by rearranging
    if (!(i % 3) && !(i % 5)) console.log("FizzBuzz");
    else if (!(i % 3)) console.log("Fizz");
    else if (!(i % 5)) console.log("Buzz");
    else console.log(i);

    // 2 with string concat operator
    // let val = "";
    // if (!(i % 3)) val = val + "Fizz";
    // if (!(i % 5)) val = val + "Buzz";
    // console.log(val? val : i)
    // // if (val) console.log(val)
    // // else (console.log(i))

    // 3 with interpolation
    // let val = `${!(i % 3) ? "Fizz" : ""}${!(i % 5) ? "Buzz" : ""}`;
    // console.log(val ? val : i)
    // // if (i % 3 && i % 5) console.log(i);
    // // else console.log(val);

    // 4 with unreadability
    // console.log(!(i % 3) || !(i % 5) ? `${!(i % 3) ? "Fizz" : ""}${!(i % 5) ? "Buzz" : ""}` : i);

    // 5 MY EYES, TURN BACK! 🤡
    // console.log(((!(i % 3) && "Fizz") + "" + (!(i % 5) && "Buzz")).replaceAll("false", "") || i);
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
// yarn test exercise-9

module.exports = exercise9;
