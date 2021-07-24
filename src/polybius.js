// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

 function getCode(letter) {
    let row = 0;
    let column = 0;
    letter = letter.toLowerCase();
    let letterNum = letter.charCodeAt(0) - 96;
    if (letterNum >= 10) {
      letterNum -= 1;
    }

    if (letterNum % 5 != 0) {
      row = Math.floor(letterNum / 5) + 1;
      column = letterNum % 5;
    } else {
      row = Math.floor(letterNum / 5);
      column = 5;
    }
    // 5 -
    return `${column}${row}`;
  }
  /**
   * inverse of getCode where it takes two numbers and gets back the letter
   * @param {number} column between 1-5 used for column is grid for decode
   * @param {number} row between 1-5 used for row in grid for decode
   */
  function deCode(column, row) {
    if (column == 4 && row == 2) {
      return "i/j";
    }
    let total = (parseInt(row) - 1) * 5 + parseInt(column);
    if (total > 10) {
      total += 1;
    }
    total += 96;
    //console.log(total);
    // console.log(String.fromCharCode(total));
    return String.fromCharCode(total);
  }
  /**
   * will return true if string is 1 character and is a letter
   * @param {String} str single character string
   */
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  /**
   * Function that translates a string with polybius grid
   * @param {String} input string to decode or encode
   * @param {boolean} encode to encode or decode true = encode false = decode
   */
  function polybius(input, encode = true) {
    let result = "";
    // encode
    if (encode) {
      for (let letter of input) {
        if (isLetter(letter)) {
          result += getCode(letter);
        } else {
          result += letter;
        }
      }
    }
    // decode
    else {
      let noSpaces = input.replace(" ", "");
      while (noSpaces.includes(" ")) {
        noSpaces = noSpaces.replace(" ", "");
      }

      if (noSpaces.length % 2 != 0) {
        return false;
      }
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " " || input[i + 1] === " ") {
          if (input[i] === " " && input[i + 1] === " ") {
            result += input[i];
            result += input[i + 1];
          } else {
            if (input[i] === " ") {
              result += input[i];
              i -= 1;
            } else {
              return false;
            }
          }
        } else {
          result += deCode(input[i], input[i + 1]);
        }
      }
    }
    return result;
  }

  return {
    polybius,
    isLetter,
    getCode,
  };
})();

module.exports = { polybius: polybiusModule.polybius };