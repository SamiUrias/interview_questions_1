// -- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome
// -- Examples:
// palindrome('abba') === true
// palindrome('abcdefg') === false

const palindrome = (str) => {
  return str === reverse(str);
};

const palindrome2 = (str) => {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
};

/**
 * This is not the optimal solution
 * @param {*} str
 */
const palindrome3 = (str) => {
  return str.split("").every((char, index, arr) => {
    return char === arr[arr.length - index - 1];
  });
};

/**
 * This function returns the string in the reverse order
 * @param {*} str
 */
function reverse(str) {
  let reversedString = "";
  for (const character of str) {
    reversedString = character + reversedString;
  }
  return reversedString;
}

module.exports = { palindrome, palindrome2, palindrome3 };
