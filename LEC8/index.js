const express= require('express')

// import express from 'express'

const app = express()

app.get('/', (req, res) => {
  //res.send('Hello World') //text
  //res.send("<h1> ROMSHA </h1>") //html
  //res.sendFile(__dirname + '/index.html') //file //dirname--presemt working directory
  //res.json({ message: 'Hello World' }) //json

  res.end("hi")
})

//path variable
//1.query parameter
app.get("/watch",(req,res)=>{
    // console.log(req.query.v);
    let videoId = req.query.v;
    let nid=req.query.n;
    res.send("id got it "+ videoId + " " + nid)
})


//2.) params
app.get("/watch/:v/video/:n",(req,res)=>{ //2 params :n :v
    console.log(req.params.v);
    console.log(req.params.n);
    res.send("huyaaa ")
})

app.listen(3000,function () {
  console.log('Example app listening on port 3000!')
})






