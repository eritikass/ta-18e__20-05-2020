const fetch = require("node-fetch");

run();

 async function run(){
    sum = await calc(1,3)
    console.log("hit api");
    console.log( sum);
 }

async function calc(a,b) {
    const response = await fetch(`https://upload.kassikas.com/tpt-sum/?number1=${a}&number2=${b}`);
   let obj = await response.json();
    return obj.sum;
}
exports.calc = calc;