//create a server
const express=require("express");
const app=express();
const { m1, m2 } = require('./middleware/firstmiddleware');
const {m3}=require('./middleware/pathlevel');
const userRouter=require('./routes/userRoutes');
app.use(express.json());
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(m1);

// app.use(m2);
//m2ko chlane k liye next likhna pdega kyuki controller bhi ek trh ka middleware fun hai.

app.use("/api/users",userRouter); //router level middleware

app.get("/health",m3,(req,res,next)=>{
    console.log("running controller function");
    // next();
    return res.json({
        status:"ok",
        message:"server running ok"
    })
    //console.log("after response sent from controller function");
})
app.use(m2);

app.get("/home",(req,res)=>{
    console.log("running home controller function");
    res.json({
        success:true,
        message:"Welcome to home page"
    })
})

// app.use(m2);


app.listen(3000,()=>{
   console.log("server is running on port 3000");
}) 



//middleware -- function which runs on client request before cotroller function
//next or return is not same