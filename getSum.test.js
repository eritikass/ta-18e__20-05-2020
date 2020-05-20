const sum = require("./getSum.js");

test("expect sum to be 27", async () => {
	sum.GetSum(13, 14).then(response => {
		expect(response).toBe(27);
	});
});

test("expect sum to be -1", async () => {
	sum.GetSum(100, -200).then(response => {
		expect(response).toBe(-100);
	});
});

test("expect sum to be undefined", async () => {
	sum.GetSum("a", 200).then(response => {
		expect(response).toBe(undefined);
	});
});
