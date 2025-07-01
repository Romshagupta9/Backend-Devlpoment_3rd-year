// const fs = require("fs");
// console.log("start'");
// setTimeout(()=>{
//     console.log("timer callbak");
// },0)
// setImmediate(()=>{
//     console.log("set setimmediate callbak");
// })
// console.log("end");

//~~~~~~~

const fs = require("fs");
console.log("start'");
setTimeout(()=>{
    console.log("timer callbak");
},0)
setImmediate(()=>{
    console.log("set setimmediate callbak");
})
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("end");

