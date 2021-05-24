const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with an empty array", function () {
    expect(unroll([])).toEqual([]);
  });

  it("works with a 1 array", function () {
    expect(unroll([1])).toEqual([1]);
  });

  it("works with a 2 x 2 array", function () {
    expect(unroll([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);
  });

  it("works with a 3 x 3 array", function () {
    expect(unroll([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ])).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("works with a 4 x 4 array", function () {
    expect(unroll([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

});
