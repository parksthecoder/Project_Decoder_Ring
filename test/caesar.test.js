const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

describe("Caesar function: ", () => {
  it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present. ", () => {
    const testString = "abc xyz";
    let actual = caesar(testString, 26);
    expect(actual).to.eql(false);
    actual = caesar(testString, -26);
    expect(actual).to.eql(false);
    actual = caesar(testString, 0);
    expect(actual).to.eql(false);
    actual = caesar(testString);
    expect(actual).to.eql(false);
  });

  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const capitalStr = "ABC XYZ";
    const lowercaseStr = "abc xyz";
    const capital = caesar(capitalStr, 5);
    const lowercase = caesar(lowercaseStr, 5);
    expect(lowercase).to.eql(capital);
  });
  it("When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)", () => {
    const testString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    const testShift = Math.floor(Math.random() * 26) + 1;
    const testValue1 = caesar(testString, testShift);
    // console.log("test1: " + testValue1);
    const testValue2 = caesar(testValue1, testShift, false);
    // console.log(testValue2);
    expect(testValue2).to.eql(testString);
  });
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    const testString = " #### 435345 ";
    const actual1 = caesar(testString, 5, true);
    const actual2 = caesar(actual1, 5, false);
    expect(actual1).to.eql(testString);
    expect(actual2).to.eql(testString);
  });
});