//create a server
const express = require('express');
const app=express();
const User= require('./model/user.model');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/users/register',async(req,res)=>{
    let {name,email,password} = req.body;
    let userExist= await User.findOne({email});//mock
    if(userExist){
        return  res.json({
            success:false,
            message:"User already exists"
        })
    }
    let newUser = await User.create({//mock
        name:name,
        email:email,
        password:password
    })
    res.json({ 
        success:true,
        message:"User registered successfully",
        data:newUser
    })
})
module.exports=app;


// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })

