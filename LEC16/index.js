// //MONGO DB stores data in (bson) form...--binary json
// //to connect our server to mongo db we need to install mongoose
// //--key string
// //moonogose--odm (object document mapping) library so that we can use CRUD oparations
// //schema will bes stored in model folder..

// mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js

const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Blogs= require('./model/user');
const User=require('./model/user');
app.post("/blogs", async(req, res) => {
    let { title, body} = req.body;
    let newBlog = new Blogs({
        title : title,
        body : body,
        date : Date.now()
    });

    await newBlog.save() // save the blog post to the database
    res.json({
        success: true,
        data: newBlog,
        message: "Blog post created successfully", 
    })
});

app.get("/blogs", async(req, res) => {
    let AllBlogs = await Blogs.find();
    res.json({
        success: true,
        data: AllBlogs,
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id}=req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog,
    })
    
})

//user vla routes started
app.post("/users",async(req,res)=>{
    let {email, username, password} = req.body;
    let newUser= new User({
        email:email,
        username:username,
        password:password
    })
    await newUser.save();
    res.json({
        success:true,
        body: newUser,
        message:"new user added successfully"
    })
})

app.get("/blogs", async(req, res) => {
    let AllBlogs = await Blogs.find();
    res.json({
        success: true,
        data: AllBlogs,
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id}=req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog,
    })
    
})



app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected to MongoDB!'))

  
//create a user schema in user.js file
//email,username,pwd
////blog vla route k niche  3 route bnane hia...app.post("/users") , app.get("/users") , app.get("/users/:id")


