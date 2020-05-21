const sum = require('./sum');
test();
async function test() {
    const total = await sum.sum(1, 2);
    console.log(total);
}
