const express = require("express");
const router = express.Router(); // small application
const Blogs = require('../model/blog');
const { getreadBlog, postaddBlog, deleteOneBlog, getreadBlogById } = require("../controller/blogController");

router.post("/",postaddBlog);
router.get("/",getreadBlog)
router.get("/:id",getreadBlogById);
// delete blog
router.delete("/:blogId",deleteOneBlog);


//update
// router.put("/:blogId/:userId", async (req, res)=>{
//     let{blogId, userId}=req.params;
//     let{title, body}=req.body;

//     let blogExist=await Blogs.findById(blogId);
//     if(!blogExist){
//        return res.json({
//             success:false,
//             message:"Blog does not exist"
//         })
//     }
//       if(blogExist.userId!=userId){
//         return res.json({
//             success:false,
//             message:"You are not allowed to edit this blog"
//         })
//     }
//   let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
//     res.json({
//         success:true,
//         message:"Blog edited successfully",
//         data:updatedBlog
//     })

// })


module.exports = router; // export the router to use in the main app file