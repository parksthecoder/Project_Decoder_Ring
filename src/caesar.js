// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {//shifts the letter value by the shift value.
    if(!shift || shift > 25 || shift < -25 || shift === 0){//returns false early if shift does not meet specifications.
      return false;
    }                       /*start variables */
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const alphabetArr = alphabet.split('');
      const newInput = input.toLowerCase().split('');//turns input string into an array in order to shift by index value.
      
      return newInput.map((char) => {
        let output = []; 
        if(!alphabetArr.includes(char)){  
          output.push(char);             //if character is not inside alphabet return original value
          return output;
        }
        if(alphabetArr.includes(char)){                   // if it is an alphabet character the following will execute
          let index = alphabetArr.indexOf(char);       //find index of character in alphabet array alphabet.indexOf(char)
            let indexSum = index + shift;               //apply shift amount to character index/shift index by shift value
            if(!encode){
                indexSum = index - shift;
                if(indexSum > 25){
                  indexSum -= 26;
                } else if(indexSum < 0){
                  indexSum += 26;
                } 
              // console.log(indexSum);
            } else {
                 if(indexSum > 25){
                    indexSum -= 26;
                } else if(indexSum < 0){
                  indexSum += 26;
                }   
            }//end if's
            output.push(alphabet.charAt(indexSum));     //return character found at new index in alhpabet array   
            // console.log(alphabet.charAt(indexSum));    
            // console.log(indexSum)
            // console.log(output);
            return output;

        }//end if
      }).join('');
  }//end function

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };