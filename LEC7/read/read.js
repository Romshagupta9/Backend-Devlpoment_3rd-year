// const fs=require("fs");
// fs.readFile("../user.txt","utf-8",function(err,data){
//      if(err){
//         return console.log(err);
//      }
//         console.log(data);
// })

// //access the fisrt index object
// // console.log(JSON.parse(data)[0]);    

// fs.readFile("../user.txt","utf-8",function(err,data) {
//      if(err){
//         return console.log(err);
//      }
//      let users=JSON.parse(data);
//      console.log(users[0]); // Log the entire users array
//      console.log(users[1].name); // Log the name of the second user
// })


const fs = require("fs");
const {read} = require("../IOperator/util.js");
async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../user.txt");  