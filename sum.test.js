jest.mock('./sum.js');
const sum = require ('./sum.js');

test('3', async () => {
    const total = await sum.sum(1, 2);
    expect(total).toBe(3);
});

test('5', async () => {
    const total = await sum.sum(3, 2);
    expect(total).toBe(5);
});
