const fs=require("fs");
fs.readFile("../demo.txt","utf-8",function(err,data){
     if(err){
        return console.error(err);
     }
        console.log(data);
})

//async operarions....



