// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function translate(input, alphabet1, alphabet2) {
    let result = "";
    for (let character of input) {
      const key = alphabet1.indexOf(character);
      // console.log(key);
      if (key != -1) {
        result += alphabet2[key];
      } else {
        result += character;
      }
    }
    return result;
  }
  /**
   * uses given alphabet to either decode or encode the input
   * @param {String} input message to decode or encode
   * @param {String} alphabet alphabet used to replace letters in input
   * @param {boolean} encode false = decode true = encode
   */
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //check length and duplicates
    const newAlphabetArray = [];
    const alphabetArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result;
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    input = input.toLowerCase();
    for (let symbol of alphabet) {
      if (newAlphabetArray.includes(symbol)) {
        return false;
      } else {
        newAlphabetArray.push(symbol);
      }
      if (encode) {
        result = translate(input, alphabetArray, newAlphabetArray);
      } else {
        result = translate(input, newAlphabetArray, alphabetArray);
      }
    }
    //
    return result;
  }

  return {
    substitution,
    translate,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
