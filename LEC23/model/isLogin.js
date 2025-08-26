// const jwt = require("jsonwebtoken");
// const SECRET_KEY = "mySecretKey";

// function isLogin(req, res, next) {
//     let token = req.headers["authorization"];
//     if (!token) {
//         return res.status(401).json({ success: false, message: "No token provided" });
//     }

//     // Bearer <token>
//     token = token.split(" ")[1];

//     try {
//         let decoded = jwt.verify(token, SECRET_KEY);
//         req.userId = decoded.userId; // add userId to request object
//         next();
//     } catch (err) {
//         return res.status(401).json({ success: false, message: "Invalid token" });
//     }
// }

// module.exports = isLogin;