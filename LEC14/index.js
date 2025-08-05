// // create server
// const express = require("express")
// const app = express();
// const fs = require("fs");
// app.use(express.static(__dirname + "/public"));
// app.get("/users", (req, res) => {
//     fs.readFile("users.json", "utf-8", function(err,data) {
//         if(err) res.send(err)
//             let allUsers = JSON.parse(data);
//     })
// })

// app.listen(2000,()=>{
//     console.log("server started")
// })


const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json()); // Required to parse JSON in req.body
app.use(express.urlencoded({ extended: true })); // Required to parse URL-encoded data
app.use(express.json());
// GET all users
app.get("/users", (req, res) => {
    fs.readFile("./users.json", "utf-8", function(err, data) {
        if (err) return res.send(err);

        let allUsers = JSON.parse(data);
        res.json(allUsers);
    });
});


// POST new user
app.post("/adduser", (req, res) => {
    try {
        console.log(req.body);
        let name = req.body.name;
        let username = req.body.username;

        let newUser = {
            id: Math.floor(Math.random() * 1000000),
            name: name,
            username: username,
            role: "user"
        };

        let allusers = [];
        let data = fs.readFileSync("./users.json", "utf-8");
        if (data) {
            allusers = JSON.parse(data);
        }


        allusers.push(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(allusers));

        res.json({ message: "User added successfully", user: newUser });
    } catch (error) {
        return res.send(error);
    }
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});


