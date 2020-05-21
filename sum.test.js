const sum = require('./getNum');

test("3 + 5 should be 8", async () => {
    const res = await sum(3,5);
    expect(res).toBe(8);
});

test("2 + 7 should be 9", async() => {
    const res = await sum(2,7);
    expect(res).toBe(9);
})