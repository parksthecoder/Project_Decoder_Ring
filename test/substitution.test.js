const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("Substitution function: ", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.  ", () => {
    const less25 = "123456789";
    const more25 = "abcdefghijklmnopqrstuvwxyz1";
    const message = " Hi my name is Austin";

    const actualLess25 = substitution(message, less25);
    expect(actualLess25).to.eql(false);

    const actualMore25 = substitution(message, more25);
    expect(actualMore25).to.eql(false);
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function.  ", () => {
    const message = "excellent";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const result = "mbymwwmfj";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
  it("It returns false if there are any duplicate characters in the given alphabet. ", () => {
    const message = "excellent";
    const alphabet = "xoyqmcgrukswaflnthdjpzibex";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(false);
  });
  it("It maintains spaces in the message, before and after encoding or decoding. ", () => {
    const message = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const result = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.) ", () => {
    const message = "You Are An Excellent Spy";
    const message1 = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const result = substitution(message1, alphabet);
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
});