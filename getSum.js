const fetch = require('node-fetch');

async function GetSum(x, y){
	let data;
	await fetch(`https://upload.kassikas.com/tpt-sum/?number1=${x}&number2=${y}`)
		.then(response => response.json())
		.then(json => data = json.sum)
		.catch(err => console.error(err));
	return data;
}

exports.GetSum = GetSum;