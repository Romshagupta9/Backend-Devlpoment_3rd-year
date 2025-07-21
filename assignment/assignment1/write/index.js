const fs = require("fs");
let arr = process.argv.slice(2);
let data = "";
arr.forEach((elem)=>{
 data += elem+" ";
})

fs.writeFile("./data.txt",data,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("Data Added");
})
console.log(data);