const fib = require("./index");
describe("Fibonacci", () => {
  test("Fibonacci 5=5", () => {
    expect(fib(5)).toBe(5);
  });
});
