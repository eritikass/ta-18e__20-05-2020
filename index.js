const sum = require('./sum');
test();
async function test() {
    const a = await sum.kum(1, 2);
    console.log(a);
}
