const fetch = require("node-fetch");
const api_url = 'https://upload.kassikas.com/tpt-sum/?number1=1&number2=5';

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
}
getData();

const functions = {
  add: (num1, num2) => parseInt(num1) + parseInt(num2)
}

module.exports = functions;
