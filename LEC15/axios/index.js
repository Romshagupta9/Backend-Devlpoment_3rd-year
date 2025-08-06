const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/blog",(req,res)=>{
    console.log(req.body);
    let title = req.body.title;
    let content = req.body.content;
    console.log(title, content);
    res.send({
        success: true,
        message: "Blog created successfully"
    })
})

app.listen(3300,()=>{
    console.log("Server started")
})