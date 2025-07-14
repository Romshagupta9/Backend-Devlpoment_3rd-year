let users=[
    {
        id:1,
        name:"romsha",
        age:20,
        
    },
    {
        id:2,
        name:"parmeet",
        age:21,
        
    }
]


// function isAllowed(id){
//     // find id 
//     //check age > 18
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id === id) {
//             if (users[i].age > 18) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return false;
// }
// console.log(isAllowed(1)); 
// console.log(isAllowed(2)); 
// console.log(isAllowed(3));


// function isAllowed(id){//synchronous function

//     // find id 
//     //check age > 18
//     let user = users.filter((u)=>{
//         return u.id == id;
//     })[0]; // this statement is an array
//     console.log(users);
//     if(!user) return console.log("no user found");
//     if(user.age < 18) return console.log("not elligible to vote");
//     else return console.log("elligible to vote");
// }
// isAllowed(1);
// console.log("start");
// console.log("sum 2 number");



//async function

function isAllowed(id){
    return new Promise((resolve, reject) => {
        let user = users.filter((u) => {
            return u.id == id;
        })[0]; 
        console.log(users);
        if (!user) return reject("no user found");
        if (user.age < 18) return reject("not elligible to vote");
        else return resolve("elligible to vote");
    })

}
isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("start");
console.log("sum 2 number");  // this will run before isAllowed func bcz the func is made asynchronous.

