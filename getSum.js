const fetch = require('node-fetch');

async function GetSum(x, y){
    let response = await fetch(`https://upload.kassikas.com/tpt-sum/?number1=${x}&number2=${y}`).catch(err => console.error(err));
    let data = await response.json();
    return data.sum;
}

exports.GetSum = GetSum;