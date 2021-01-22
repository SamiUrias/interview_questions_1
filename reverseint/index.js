// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// ---Example:
//     reverseInt(15) === 51
//     reverseInt(981) === 189
//     reverseInt(-15) === -51
//     reversInt(-90) === -9

const reverseInt = (n) => {
  const positive = n > 0 ? true : false;
  let newString = n
    .toString()
    .split("")
    .reduce((rev, char) => {
      if (char === "-" || char === "0") {
        return rev;
      }

      return char + rev;
    }, "");

  if (!positive) {
    newString = "-" + newString;
  }

  return parseInt(newString, 10);
};

module.exports = { reverseInt };
