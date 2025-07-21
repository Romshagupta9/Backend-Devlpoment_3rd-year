const fs = require("fs");
let arr=[]
fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        return console.log(err);
    }
   arr =  data.split('\n')

   let newArr = arr.map(elem=>elem.trim()).filter(line=>line.length>0);
   let finalData = "";
   console.log(newArr);
   newArr.forEach((elem)=>{
    finalData += elem+" ";
   })
   fs.writeFile("./final.txt",finalData,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("Final Data Added");
   })

})