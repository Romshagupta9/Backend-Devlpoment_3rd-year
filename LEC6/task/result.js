// const fs=require("fs");
// fs.readFile("../demo.txt","utf-8",function(err,data){
//      if(err){
//         return console.error(err);
//      }
//         console.log(data);
// })

// fs.readFile("../demo2.txt","utf-8",function(err,data){
//      if(err){
//         return console.error(err);
//      }
//         console.log(data);
// })

//method1
// const fs= require("fs");

// let data3="";
// let data1="";
// let data2="";
// fs.readFile("../demo.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
//     data1=data;
// })
// fs.readFile("../demo2.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
//     data2=data;
//     data3=data1+data2;
//     fs.writeFile("../task.txt",data3,function(err){
//         if(err)return console.log(err);
//         console.log("done");
//     })
// })


//method2
const fs = require('fs');
const data1 = fs.readFileSync('../demo.txt', 'utf8');
const data2 = fs.readFileSync('../demo2.txt', 'utf8');
const combined = data1 + '\n' + data2;

fs.writeFileSync('result.txt', combined);

console.log('✅ Data written successfully to result.txt');

//console.log(process.argv);
