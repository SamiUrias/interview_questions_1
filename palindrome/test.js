const { palindrome, palindrome2, palindrome3 } = require("./index");
describe("Palindrome", () => {
  test("abba should be palindrome", () => {
    const word = "abba";
    expect(palindrome(word)).toBeTruthy();
  });

  test("91019 should be palindrome", () => {
    const word = "91019";
    expect(palindrome(word)).toBeTruthy();
  });

  test("91119 should be palindrome", () => {
    const word = "91119";
    expect(palindrome(word)).toBeTruthy();
  });

  test("abcdf shouldn't be palindrome", () => {
    const word = "abcdf";
    expect(palindrome(word)).toBeFalsy();
  });
});

describe("Palindrome2", () => {
  test("abba should be palindrome", () => {
    const word = "abba";
    expect(palindrome2(word)).toBeTruthy();
  });

  test("91019 should be palindrome", () => {
    const word = "91019";
    expect(palindrome2(word)).toBeTruthy();
  });

  test("91119 should be palindrome", () => {
    const word = "91119";
    expect(palindrome2(word)).toBeTruthy();
  });

  test("abcdf shouldn't be palindrome", () => {
    const word = "abcdf";
    expect(palindrome2(word)).toBeFalsy();
  });
});

describe("Palindrome3", () => {
  test("abba should be palindrome", () => {
    const word = "abba";
    expect(palindrome3(word)).toBeTruthy();
  });

  test("91019 should be palindrome", () => {
    const word = "91019";
    expect(palindrome3(word)).toBeTruthy();
  });

  test("91119 should be palindrome", () => {
    const word = "91119";
    expect(palindrome3(word)).toBeTruthy();
  });

  test("abcdf shouldn't be palindrome", () => {
    const word = "abcdf";
    expect(palindrome3(word)).toBeFalsy();
  });
});
