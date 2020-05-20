const calculateSumWithoutHTTP = require("../sumWithoutHTTP");

test("1 & 5 should return sum of 6", () => {
  const data = calculateSumWithoutHTTP(1, 5);
  expect(data).toBe(6);
});

test("3 & 4 should return sum of 7", () => {
  const data = calculateSumWithoutHTTP(3, 4);
  expect(data).toBe(7);
});
