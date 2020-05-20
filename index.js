const fetch = require('node-fetch');

let sum = GetSum(1, 5);

sum.then(result => {
    console.log(result);
});

async function GetSum(x, y) {
    return await fetch(`https://upload.kassikas.com/tpt-sum/?number1=${x}&number2=${y}`)
        .then(res => res.json())
        .then(json => {
            return json.sum;
        })
        .catch(err => console.error(err));
}