const numberTest = require("../lib/numberTest");

test("numberTest should return false given a non-number", () => {
  const e = numberTest("pizza")
  expect(e).toBe(false);
});

test("numberTest should return false if given an empty string", () => {
  const e = numberTest("");
  expect(e).toBe(false);
});

test("numberTest should return true if given a number", () => {
  const e = numberTest(88);
  expect(e).toBe(true);
});
