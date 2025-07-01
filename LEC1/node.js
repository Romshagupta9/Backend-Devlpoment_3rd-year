const fs =require("fs");
console.log("fs");
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
fs.readFile("demo.txt","utf-8",(data)=>){
    console.log(data)
}
add(2,3);
sub(5,6);
mul(9,8);
console.log("exit");
//process : set of tasks
