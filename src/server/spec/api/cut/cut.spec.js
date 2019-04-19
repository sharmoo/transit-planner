const cut = require("../../../api/cut");

describe("api/cut", function() {
    it("Returns an empty string when given an empty string", function() {
      // set up input and expected output
      const input = "";
      const expected = "";

      // run the function on the output to see what we really get
      const output = cut.cutString(input);

      // assert that we got was what we expected
      expect(output).toEqual(expected);
    });

    it("Gets every third letter in the string", function() {
        const input = "iamyourlyftdriver";
        const expected = "muydv";
        const output = cut.cutString(input);

        expect(output).toEqual(expected);
    })
  });