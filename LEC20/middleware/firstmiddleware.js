function m1(req,res,next){
    console.log("running middleware 1");
    req.userId="4";
    return next();
    console.log("after next in middleware 1");
}

function m2(req,res,next){
    console.log("running middleware 2");
    console.log(req.userId);
    req.isAdmin=true;
    return next();
    console.log("after next");
}

module.exports.m1=m1;
module.exports.m2=m2;


//we can run middleware at applicatio level-->this will run on every client request
//app.use(middleware_name);
//call next

//middleware will always run in an order --like if m2 is called before m1 then m2 will run first
