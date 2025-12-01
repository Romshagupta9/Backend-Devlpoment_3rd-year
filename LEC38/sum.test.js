const sum=require('./sum');

test("sum of 2 and 3 is 5",()=>{
    expect(sum(2,3)).toBe(5)//if these both values are equal then only test case will pass expect & toBe are matcher functions
})

test("sum of '2' and '3' should return all arguments must be numbers",()=>{
    expect(sum("2",3)).toBe("all arguments must be numbers")
})

test("all arguments must be passed",()=>{
    expect(sum(2)).toBe("all arguments must be passed")
})
