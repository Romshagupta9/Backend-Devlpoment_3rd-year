//create a server using express

// const fs = require('fs');
// const express = require('express');
// const app = express();
// app.use(express.json()); //middleware to parse JSON bodies
// // app.get('/', (req, res) => {
// //   res.send('Hello World');
// // });  
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


//post request
// app.post('/home',(Req,res)=>{
//     res.send("post request recieeved")
// })



//acccess 2 diff data from body and then send the data in json form
// app.post('/data',(req,res)=>{
//     //accessing body data
//     console.log(req.body);
//     res.json({
//         name:req.body.name,
//         email:req.body.email,
//     });
// });


//acccess 2 diff data from body and then send the data in json form
// app.post('/data',(req,res)=>{
//     //accessing body data
//    console.log(arr.push(req.body));
//     console.log(arr);
//     fs.writeFile("./data.txt",JSON.stringify(arr),(err)=>{
//         if(err){
//             return console.log(err);
//         }
//         console.log("done")
//     });
// });
// let arr = [];





//do not overwite
//read data from file and send it in json form

const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello")
})
// let obj = {
//     name,
//     age:20,
// }

app.post("/user",(req,res)=>{
    // let{name,age} = req.body;
    // res.json({name,age});
    let arr = [];
    let name = req.body.name;
    let age = req.body.age;
    let user = {name,age};
    
    fs.readFile("./data.txt","utf-8",(err,data)=>{
   
    if(!err&&data!=""){
        arr = JSON.parse(data)
    }
    console.log(arr.push(user));
    
   
    console.log(arr);
    fs.writeFile("./data.txt",JSON.stringify(arr,null,2),(err1)=>{
        if(err1){
            return console.log(err1);
        }
        console.log("done")
    })
    

    })
  res.send("user added")
})
app.post("/register",(req,res)=>{
     })

app.listen(3000,()=>{
    console.log("server started");
})