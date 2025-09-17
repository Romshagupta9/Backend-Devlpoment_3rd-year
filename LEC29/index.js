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



// addUser("rparmeet@gmail.com","parmeet","parmeet123")
// .then(()=>{
//     console.log("new User Added successfully!");
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

// addTweet("my second tweet",7) 
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


// getUserTweet(1)
// .then((data)=>{
//     console.log(data);
// })

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


// updateTweets("1","1","updated tweet content")
// .then(()=>{
//     console.log("~~~~~~~~~  tweet updated successfully !!! :) ~~~~~~");
// })

// user wants to delete his tweet
// async function deleteUser(userId){
//     await prisma.user.delete({
//         where:{
//             id:Number(userId)   
//         }
//     })
//     return "User deleted successfully";
// }

// deleteUser("1").then((msg) => {
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// })


async function getUsers(){
    let allusers = await prisma.user.findMany({
        // select:{
        //     name: true,
        //     email: true,
        //     tweet: {
        //         select:{
        //             content: true
        //         }
        //     }
        // }
        include:{
        tweet: {
            select:{
                content: true
            }
        }
    }
}) 
    return allusers;
    
}
getUsers().then((data)=>{
    console.log(JSON.stringify(data, null, 2))
})

