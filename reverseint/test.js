const { reverseInt } = require("./index");
describe("reverseInt", () => {
  test("reverseInt(15) === 51", () => {
    expect(reverseInt(15)).toBe(51);
  });

  test("reverseInt(981) === 189", () => {
    expect(reverseInt(981)).toBe(189);
  });

  test("reverseInt(500) === 5", () => {
    expect(reverseInt(500)).toBe(5);
  });

  test("reverseInt(-15) === -51", () => {
    expect(reverseInt(-90)).toBe(-9);
  });
});

describe("reverseInt", () => {
  test("reverseInt(15) === 51", () => {
    expect(reverseInt(15)).toBe(51);
  });

  test("reverseInt(981) === 189", () => {
    expect(reverseInt(981)).toBe(189);
  });

  test("reverseInt(500) === 5", () => {
    expect(reverseInt(500)).toBe(5);
  });

  test("reverseInt(-15) === -51", () => {
    expect(reverseInt(-90)).toBe(-9);
  });
});
