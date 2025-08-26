/* 
create a login route and generate the jwt token with the payload --> {"userId": user._id}
in route post/blogs add middleware is login, in this middleware verify the jwt token and modify req object like req.userId = decode.userId
*/




// create server

const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Blogs= require('./model/blog');
const User=require('./model/user');
let jwt = require("jsonwebtoken");
// const isLogin = require("./model/isLogin");

// middleware to verify token

function isLogin(req, res, next){
    let token = req.headers.authorization;
    if(!token){
        return res.json({
            success: false,
            message: "No token provided, plz login"
        })
    }
    let decode = jwt.verify(token, "mysecret");
    if(!decode){
        return res.json({
            success: false,
            message: "Invalid Token"
        })
    }
    req.userId = decode.userId;
    next()
}
// add a blog to database
app.post("/blogs", isLogin, async(req, res) => {
    let { title, body } = req.body;
    let userId = req.userId;
    // console.log(title, body, userId);
    let userExist = await User.findById(userId);
    if(userExist){
        let newBlog = new Blogs({
        title : title,
        body : body,
        date : Date.now(),
        userId: userId
        });
        await newBlog.save() // save the blog post to the database
        userExist.blogs.push(newBlog._id); // add the blog post ID to the user's blogs array
        await userExist.save(); // save the updated user document
        res.json({
            success: true,
            data: newBlog,
            message: "Blog post created successfully", 
        })
    }
});

// get all blogs

app.get("/blogs", async(req, res) => {
    let AllBlogs = await Blogs.find();
    res.json({
        success: true,
        data: AllBlogs,
    })
})

// get single blog
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

// Get all users
app.get("/users", async (req, res) => {
        let allUsers = await User.find();
        res.json({
            success: true,
            data: allUsers,
        });
});

// Get a user by ID
app.get("/users/:id",async(req,res)=>{
    let {id}=req.params
    let userExist = await User.findOne({_id:id}).populate("blogs");    // populate function retrieves the full blog documents
    if(userExist){ 
        res.json({
            success: true,
            data: userExist,
        });
    } 
})

// delete blog
app.delete("/blogs/:blogId",isLogin, async (req, res) => {
    let {blogId} = req.params;
    let{userId} = req.userId;
    let blogExist = await Blogs.findById(blogId);
    if(!blogExist) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if(blogExist.userId != userId) return res.json({
        success: false,
        message: "You are not allowed to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await User.findById(userId);
    let blog = userExist.blogs.filter((id) => id != blogId);
    userExist.blogs = blog;
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
})


//update
app.put("/blogs/:blogId/:userId", async (req, res)=>{
    let{blogId, userId}=req.params;
    let{title, body}=req.body;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
       return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
      if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to edit this blog"
        })
    }
  let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
    res.json({
        success:true,
        message:"Blog edited successfully",
        data:updatedBlog
    })

})

//new code added~~~~~~~~~~~
// Login route~~~~~~~~~~~
// user login
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let userExist = await User.findOne({ email : email}); 
  if (!userExist) {
    return res.json({ 
        success: false, 
        message: "plz signup" 
    });
  }
  if(userExist.password !== password) {
    return res.json({ 
        success: false, 
        message: "Incorrect password" 
    });
  }
  // generate JWT token
  let token = jwt.sign({ "userId": userExist._id }, "mysecret");
  res.json({ 
    success: true, 
    message: "login success",
    token: token 
  });
});



app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected to MongoDB!'))


  
