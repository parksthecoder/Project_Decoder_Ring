const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("Polybius function: ", () => {
  it("When encoding, it translates the letters i and j to 42 ", () => {
    const testString = "i";
    let actual = polybius(testString);
    expect(actual).to.equal("42");

    const testString2 = "j";
    actual = polybius(testString2);
    expect(actual).to.equal("42");
  });
  it("When decoding, it translates 42 to (i/j) ", () => {
    const testString = "42";
    let actual = polybius(testString, false);
    expect(actual).to.equal("i/j");
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const testString = "A Message";
    const testString2 = "a message";
    let capital = polybius(testString);
    let lowercase = polybius(testString2);
    expect(capital).to.eql(lowercase);
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const testString = "a message word";
    let encode = polybius(testString);
    let decode = polybius(encode, false);
    expect(decode).to.eql(testString);
  });
});