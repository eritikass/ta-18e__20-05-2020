jest.mock('./getSum.js');
const sum = require('./getSum.js');

test('expect sum to be 5', async () => {
	sum.GetSum(2, 3).then(response => {
		expect(response).toBe(5);
	});
});

test('expect sum to be -1', async () => {
	sum.GetSum(2, -3).then(response => {
		expect(response).toBe(-1);
	});
});

test('expect sum to be undefined', async () => {
	sum.GetSum('a', 3).then(response => {
		expect(response).toBe(undefined);
	});
});