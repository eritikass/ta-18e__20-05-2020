async function GetSum(x, y) {
	let sum = parseInt(x+y);
	if(isNaN(sum)) {
		sum = undefined;
		return Promise.resolve(sum);
	}
	else {
		return Promise.resolve(sum);
	}
}

exports.GetSum = GetSum;