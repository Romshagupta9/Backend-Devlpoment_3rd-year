const express=require("express");
const {PrismaClient}=require("./generated/prisma");
const app=express();
const prisma=new PrismaClient();

app.use(express.json());

app.post("/tweet/addUser",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const newUser=await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:password
            }
        });
        res.json({
            success:true,
            message:"User added successfully",
            data:newUser
        });
    }catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
});


app.get("/tweet/allUsers",async(req,res)=>{
    try{
    const users=await prisma.user.findMany({
        include:{
            tweet:true
        }
    });
    res.json({
        success:true,
        message:"User fetched successfully",
        data:users
    });
} catch(error){
    res.json({
        success:false,
        message:error.message
    })
}

})

app.get("/tweet/user/:id",async(req,res)=>{
    const {id}=req.params;
    const userExist=await prisma.user.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            tweet:true
        }
    });
    if(!userExist){
        res.json({
            success:false,
            message:"User not found"
        })
    }

    return res.json({
        success:true,
        message:"User found successfully",
        data:userExist
    });
})


app.put("/tweet/users/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,password}=req.body;
       const userExist=await prisma.user.findUnique({
        where:{
            id:Number(id)
        }
       })
       if(!userExist){
        return res.json({
            success:false,
            message:"User not found"
        })
       }

       const updatedUser=await prisma.user.update({
        where:{
            id:Number(id)
        },
        data:{
            name:name,
            email:email,
            password:password
        }
       })
       return res.json({
        success:true,
        message:"User updated successfully",
        data:updatedUser
       })

    }catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
})

//DELETE USER
app.delete("/tweet/users/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const userExist=await prisma.user.findUnique({
            where:{
                id:id
            }
        })

        if(!userExist){
            return res.json({
                success:false,
                message:"User not found"
            })
        }

        const deletedUser= await prisma.user.delete({
            where:{
                id:Number(id)
            }
        })
        return res.json({
            success: true, 
            message: "User deleted successfully!" ,
            data:deletedUser
        });
    } catch (error) {
        res.json({ 
            success: false,
            message:error.message
         });
    }
})

//CREATE TWEET
app.post("/tweet/addTweet",async(req,res)=>{
    try{
        const {content,userId}=req.body;
        const userExist=await prisma.user.findUnique({ 
            where:{ 
                id: Number(userId) 
            }
        });
        if(!userExist){ 
            return res.json({
                success: false, 
                message: "User not found" 
            });
        }
        const newTweet=await prisma.tweet.create({
            data:{
                content:content,
                userId:Number(userId)
            }
        });
        res.json({
            success:true,
            message:"Tweet created successfully",
            data:newTweet
        });
    }catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
})


//GET TWEET BY ID
app.get("/tweet/getTweet/:tweetId", async (req, res) => {
  try {
    const {tweetId} = req.params;
    const tweetExist = await prisma.tweet.findUnique({
      where: { id: Number(tweetId) },
      include: { user: true }
    });

    if (!tweetExist) {
      return res.json({
        success: false,
        message: "Tweet not found"
      });
    }

    return res.json({
      success: true,
      message: "Tweet fetched successfully",
      data: oneTweet
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message
    });
  }
});

//UPDATE TWEET
app.put("/tweet/updateTweet/:tweetId", async (req, res) => {
    try{
        const { tweetId } = req.params;
        const { userId, content } = req.body;

        const tweet = await prisma.tweet.findUnique({ 
            where: {
                id: Number(tweetId) 
            }
        });
        if (!tweet) {   
            return res.json({ 
                success: false, 
                message: "Tweet not exists" 
            });
        }

        if (tweet.userId !== Number(userId)) {
            return res.json({   
                success: false,     
                message: "You are not authorized to update this tweet" });
        }

        const updatedTweet = await prisma.tweet.update({
            where: {
                id: Number(tweetId)
            },
            data:{content}
        });
        return res.json({  
            success: true, 
            message: "Tweet updated successfully",
            data: updatedTweet
         });
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
});

//creating a function to delete user by ID;
//DELETE TWEET
app.delete("/tweets/:tweetId", async (req, res) => {
    try{
        const { tweetId } = req.params;
        const { userId } = req.body;

        const tweet = await prisma.tweet.findUnique({ 
            where: {
                id: Number(tweetId) 
            }
        });
        if (!tweet) {
            return res.json({ 
                success: false,
                message: "Tweet not exists" 
            });
        }

        if (tweet.userId !== Number(userId)) {
            return res.json({   
                success: false, 
                message: "You are not authorized to delete this tweet" 
            });
        }

        await prisma.tweet.delete({ 
            where: {    
                id: Number(tweetId) 
            }
        });
        res.json({ 
            success: true, 
            message: "Tweet deleted successfully!",
        });
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    };
});

app.listen(3056,()=>{
    console.log("Server started");
})