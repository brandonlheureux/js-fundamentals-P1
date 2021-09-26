const exercise13 = require("../2-workshop/exercise-13");

test("Exercise 13", () => {
  exercise13();
  // expect(console.log.mock.calls[0][0]).toEqual(7778742049);
  // this is the 50th fib(n) according to 0,1 start as per exercise description
  expect(console.log.mock.calls[0][0]).toEqual(12586269025);
});
