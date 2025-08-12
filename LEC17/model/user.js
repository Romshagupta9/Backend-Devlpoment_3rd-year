// email, username, password
const mongoose = require('mongoose');
const blog = require('./blog');
const Schema = mongoose.Schema;
// const BlogPost = new Schema({
//   title: String,
//   body: String,
//   date: Date
// });


// module.exports = mongoose.model('Blog', BlogPost);

//creating a user schema
const userSchema = new Schema({
  email: String,
  username: {
    type: String,
    required: true
  },
  password: String,
  blogs: [{
    type: mongoose.Types.ObjectId,
    ref: "Blog"
  }]
})


module.exports=mongoose.model('User',userSchema);