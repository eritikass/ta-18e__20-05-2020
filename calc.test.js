jest.mock("./calc")
const {calc} = require("./calc");

test("", async () =>{
   await calc(15,4).then(sum => {
        expect(sum).toBe(19)
    })

})