const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const BlogPost = new Schema({
//   title: String,
//   body: String,
//   date: Date
// });


// module.exports = mongoose.model('Blog', BlogPost);

//creating a usee schema
const userSchema=new Schema({
  email:String,
  username:String,
  password: String
})
module.exports=mongoose.model('User',userSchema);