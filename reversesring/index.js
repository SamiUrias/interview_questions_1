// --- Directions
// Given a string, regurn a new string with the reversed
// order of characters
// --Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings') === '!sgniteerG'

function reverse(str) {
  let stringArray = [];
  let newString = [];
  stringArray = str.split("");
  for (let i = stringArray.length - 1; i >= 0; i -= 1) {
    newString.push(stringArray[i]);
  }

  return newString.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

function reverse3(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse4(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = { reverse, reverse2, reverse3, reverse4 };
