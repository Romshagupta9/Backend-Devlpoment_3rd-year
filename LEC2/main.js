// let somefun = require("./node");
// console.log(somefun);
// let res1=somefun.add(2,3);
// let res2=somefun.sub(5,6);
// let res3=somefun.mul(9,8);
// console.log(res1);
// console.log(res2);
// console.log(res3);

// let somefun = require("./index")
// console.log(somefun);
// let result1 = somefun.sum(2,3)
// let result2 = somefun.sub(6,5)
// console.log(result1, result2);
import { add , sub } from "./file.mjs"; // named imports are in {}
let result1 = add(2,3)
let result2 = sub(6,5)
console.log(result1, result2);