const User = require('../model/user');
module.exports.postaddUser=async(req,res)=>{
    let {email, username, password} = req.body;
    let newUser= new User({
        email:email,
        username:username,
        password:password
    })
    await newUser.save();
    res.json({
        success:true,
        body: newUser,
        message:"new user added successfully"
    })
}


module.exports.getreadUser= async (req, res) => {
        let allUsers = await User.find();
        res.json({
            success: true,
            data: allUsers,
        });
}

module.exports.getreadUserById=async(req,res)=>{
    let {id}=req.params
    let userExist = await User.findOne({_id:id}).populate("blogs");    // populate function retrieves the full blog documents
    if(userExist){ 
        res.json({
            success: true,
            data: userExist,
        });
    } 
}