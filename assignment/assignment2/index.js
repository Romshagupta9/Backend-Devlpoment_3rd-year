const fs = require("fs");
let input = process.argv.slice(2);
let title = input[0];
let description = input[1];
let todoTask = {
    "Title":title,
    "Description":description
};
fs.readFile('./todo.txt','utf-8',(err1,data)=>{
    let todo = [];
    if(!err1&&data!=""){
        todo = JSON.parse(data);
        
    }
    todo.push(todoTask);
    fs.writeFile('./todo.txt',JSON.stringify(todo,null,2),(err2)=>{
        if(err2){
            return console.log(err2);
        }
        console.log("Task Added");
    })
})