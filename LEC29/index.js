const { PrismaClient} = require("./generated/prisma");
const prisma = new PrismaClient();
async function addUser(email,name,password){
    let newUser=await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:password
        }
    })
    return newUser;
} 

// addUser("hello61116@gmail.com","hello","hello123")
// .then(()=>{
//     console.log("User Added successfully!");
// })
// .catch((err)=>{
//     console.log(err.message);
// })


async function addTweet(content,userId){
    await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
    })
}


// addTweet("my first tweet",1) 
// .then(()=>console.log("Tweet added successfully!"))

//find all tweet by user who's id=1;

async function getUserTweet(userId){
    let tweets=await prisma.tweet.findMany({
    where:{
        userId:Number (userId)
    }
})
    return tweets;
}

getUserTweet(1)
.then((data)=>{
    console.log(data);
})

//user who's id is one wants to update his tweet --> tweet id is 1

async function updateTweets(tweetId,userId,updatedContent){
    let tweet= await prisma.tweet.findUnique({
        where:{
            id:Number(tweetId)

        }
    })
    if(!tweet){
        return "tweet not found";
    }
    if(tweet.userId != Number(userId)){
        return "user is not allowed to update this tweet";
    }
    await prisma.tweet.update({
        where:{
            id:Number(tweetId)
        },
        data:{
            content:updatedContent
        }
    })
}
    
updateTweets("1","1","updated tweet content")
.then(()=>{
    console.log("~~~~~~~~~  tweet updated successfully !!! :) ~~~~~~");
})

