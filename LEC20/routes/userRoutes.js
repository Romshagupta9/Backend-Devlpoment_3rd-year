//router level middleware 
const express = require('express');
const router = express.Router();
const { m5 } = require('../middleware/routelevel');
router.use(m5);
router.post("/",(req,res)=>{
    res.json({
        success: true,
        message: "User created successfully"
    });
})
router.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "User fetched successfully"
    });
})

router.get("/:id",(req,res)=>{
    res.json({
        success: true,
        message: `single User data fetched successfully`
    });
})

module.exports = router;