const express = require("express");
const router = express.Router(); // small application
const User = require("../model/user");
const { postaddUser, getreadUser, getreadUserById } = require("../controller/userController");


//user vla routes started
router.post("/",postaddUser)


// Get all users
router.get("/",getreadUser);

// Get a user by ID
router.get("/:id",getreadUserById);

module.exports = router; // export the router to use in the main app file