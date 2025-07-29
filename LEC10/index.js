const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html")
// })
app.post("/submit",(req,res)=>{
    let name1 = req.body.name1;
    let age = req.body.age;
    console.log(name1);
    console.log(age);
    res.send("user added")
    
})
app.listen(3000,()=>{
    console.log("Server Started")
})