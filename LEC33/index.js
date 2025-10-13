import { createClient } from "redis";
const client = await createClient(); 

client.connect();
client.on("error",function(err){
    console.log(err);
});

async function catcchUserProfile(){
    await client.set("user:1",JSON.stringify({
        name:"romsha",
        age:18}));
}

async function readProfile(){
    let data = await client.get("user:1");
    return data;
}


// catcchUserProfile()
// .then(()=>{
//         console.log("profile catched");
// });




readProfile().then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)});

//prisma vle routes ke andr chnges krne hia
