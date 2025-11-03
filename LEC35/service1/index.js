let{createClient} = require("redis");
let client = createClient();

async function notify(){
    // await client.connect(); ~~ another method to connect
    await client.publish("notify_me",JSON.stringify
        ({event_id:1,message:"Hello iphone back in stock!"}));
}

setTimeout(()=>{    
notify();
},2000);

client.connect()
.then(()=>{
    console.log("Redis Connected");
})
