//MONGO DB stores data in (bson) form...--binary json
//to connect our server to mongo db we need to install mongoose
//--key string
//mongoose--odm (object document mapping) library so that we can use CRUD oparations
//schema will bes stored in model folder..
// mongoose is ODM (Object Data Modeling) to connect node.js(server) to mongodb and to perform CRUD operations through node.js


// MAPPING:
/* 
    ONE TO ONE
    ONE TO MANY
    MANY TO MANY
    MANY TO ONE
*/



const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Blogs= require('./model/blog');
const User=require('./model/user');

const blogRoute = require('./routes/blogsRoutes');
app.use("/api/blogs", blogRoute);


const userRoute = require('./routes/usersRoutes');
app.use("/api/users", userRoute);


app.listen(4445, () => {
  console.log("Server is running on port 4445");
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected to MongoDB!'))
