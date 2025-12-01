//creating a server
const express = require('express');
const User=require('./model/user.schema');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sum",(req,res)=>{
    let {a,b}=req.body;
    if(a==undefined || b==undefined){
        return res.json({
            success:false,
            message:"invalid arguments"
        })
    }
    res.json({
        success:true,
        data:a+b
    })
})

app.post("/api/users/register",async(req,res)=>{
    let {name,email,password}=req.body;
    let newUser= new User({
        name,
        email,
        password
    })
    await newUser.save();
    res.json({
        success:true,
        message:"user registered successfully",
        data:newUser
    })
})
module.exports=app;
