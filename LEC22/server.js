const express=require("express");
const mongoose=require("mongoose");
const User=require("./model/user");
const jwt = require("jsonwebtoken")
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
function isLogin(req,res,next){
    if(!req.headers.authorization){
        return res.send({
            success:false,
            message:"No auth key provided"
        })
    }
    let token = req.headers.authorization;
    if(!token){
        return res.send({
            success:false,
            message:"login please"
        })
    }

    let decode = jwt.verify(token,"okkkkk");
    
    if(!decode){
        return res.send({
            success:false,
            message:"invalid token"
        })
    }
    req.user=decode.user
    next();
}
app.get("/health", (req, res)=>{
    res.json({
        status:"Okay",
        message:"Server is running okay"
    })
})

app.post("/api/users/signUp",async(req, res)=>{
   try{
     let{name, email, password}=req.body;
    let userExist= await User.findOne({email:email});
    if(userExist){
        return res.json({
            success:false,
            message:"User already exist"
        })
    }
    let newUser=new User({
        name:name,
        email:email,
        password:password,
    });

    await newUser.save();
   return res.json({
    success:true,
    message:"User registered successfully, please login to continue"
   }) 
   }catch (error){
    console.log(error.message);
    res.json({
        error:{
            message:error.message
        }
    })
   }
})
app.get("/home",isLogin,(req,res)=>{
    console.log(req.user)
    const user = req.user;
    res.json({
        success:true,
        message:"welcome"+" "+user.name
    })
})

app.post("/api/auth/login", async(req, res)=>{
    try{
        let{email,password}=req.body;
    let userExist=await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"You are not registered. Please signup"
        })
    }
    if(password!==userExist.password){
        return res.json({
            success:false,
            message:"Invalid password"
        })
    }
    let token = jwt.sign({"user":userExist},"okkkkk");
    return res.json({
        sucess:true,
        message:"Login successfully",
        token:token
    })
    }catch (error){
        console.log(error.message)
        res.json({
            message:error.message
        })
    }
})




mongoose.connect('mongodb://127.0.0.1:27017/g26_db')
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err);
  
  })
app.listen(3000, ()=>{
    console.log("Server started");
})