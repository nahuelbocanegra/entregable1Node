const {chekeInteger} = require("./test")

test("debe devolver un boolean",()=>{

    const value= 5;
    
    const result=chekeInteger(value);


    expect(result).toBe(true);

})

test("debe devolver un true cuando le pasan un numero 100",()=>{
    const value=100;
    const result= chekeInteger(value)

    expect(result).toBe(true)
})