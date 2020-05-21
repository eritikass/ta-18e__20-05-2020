const fetch = require("node-fetch");

const GetNum = async(num1, num2) => {
    let url = "https://upload.kassikas.com/tpt-sum/";
    let res = await fetch(`${url}?number1=${num1}&number2=${num2}`);

    if(res.status !== 200) {
        throw new Error("Failed to fetch");
    }

    let data = await res.json();
    let sum = data.sum;

    return sum;

} 

module.exports = GetNum;



