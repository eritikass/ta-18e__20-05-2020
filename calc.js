const fetch = require("node-fetch");
calc(9,4);


function calc(a,b) {
        url = `https://upload.kassikas.com/tpt-sum/?number1=${a}&number2=${b}`;
         fetch(url)
        .then(response => response.json())
         .then(data => {
             console.log(data)
             console.log(data.sum)
            });
}