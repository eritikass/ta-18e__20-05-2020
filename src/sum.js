const fetch = require("node-fetch");

const calculateSum = async (number1, number2) => {
  const url = "https://upload.kassikas.com/tpt-sum/";
  const urlCalc = `${url}?number1=${number1}&number2=${number2}`;

  // Fetch
  const response = await fetch(urlCalc);

  // Get error when request is bad
  if (response.status !== 200) {
    throw new Error("Cannot fetch the data");
  }
  // Get response in JSON
  const data = await response.json();
  // Get sum
  const calcSum = data.sum;

  return calcSum;
};
module.exports = calculateSum;
