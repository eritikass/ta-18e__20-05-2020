let calSum = require("../cal");

test("1 + 3 should give 4", async () => {
  let ans = await calSum(1, 3);
  expect(ans).toBe(4);
});

test("3 + 5 should give 8", async () => {
  let ans = await calSum(3, 5);
  expect(ans).toBe(8);
});