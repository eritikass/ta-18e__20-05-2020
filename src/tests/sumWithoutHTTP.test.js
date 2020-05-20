const calculateSumWithoutHTTP = require("../sumWithoutHTTP");

test("1 & 5 should return sum of 6", () => {
  expect(calculateSumWithoutHTTP(1, 5)).toBe(6);
});

test("3 & 4 should return sum of 7", () => {
  expect(calculateSumWithoutHTTP(3, 4)).toBe(7);
});
