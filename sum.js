const fetch = require('node-fetch');

let kum = async (number1, number2) => {
    let response = await fetch(`https://upload.kassikas.com/tpt-sum/?number1=${number1}&number2=${number2}`).catch(error => console.error(error));
    let json = await response.json();
    return json.sum;
};

exports.kum = kum;
