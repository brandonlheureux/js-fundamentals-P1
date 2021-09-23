const exercise11 = require("../2-workshop/exercise-11");

test("Exercise 11", () => {
  exercise11();
  expect(console.log.mock.calls.join()).toBe(
    "#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n_#_#_#_#"
  );
});
