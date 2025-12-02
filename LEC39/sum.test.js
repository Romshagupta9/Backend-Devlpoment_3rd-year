//mocking a function--creating a new function

let sum = jest.fn();

//mockReturnValue ko kisi fn k andr rkhege to bhi vo globally set ho jata hai
//sum.mockReturnValueOnce(5);//globa bnadiya but ek pass hoga or ek fail coz it's

test("sum of 2 and 3 is 5",()=>{
    sum.mockReturnValueOnce(5);
    expect(sum(2,3)).toBe(5);
})

test("sum of 2 and 3 is 5",()=>{
    sum.mockReturnValueOnce(7);
    expect(sum(4,3)).toBe(7);
})
