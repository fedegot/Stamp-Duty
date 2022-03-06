const lbtt = require("./index.js");

test(`calculate of the percentage`, () => {
  expect(lbtt(147000).toEqual(2940));
});
