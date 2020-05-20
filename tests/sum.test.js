const sum = require("../sum");

test("1 & 5 should return sum of 6", async () => {
  const data = await sum(1, 5);
  expect(data).toBe(6);
});

test("3 & 4 should return sum of 7", async () => {
  const data = await sum(3, 4);
  expect(data).toBe(7);
});
