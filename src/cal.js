let fetch = require("node-fetch");

let sum = async (numb1, numb2) => {
 let url = "https://upload.kassikas.com/tpt-sum/";
 let res = await fetch(`${url}?number1=${numb1}&number2=${numb2}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  let anwser = await res.json();
  
  return anwser.sum;
};
module.exports = sum;