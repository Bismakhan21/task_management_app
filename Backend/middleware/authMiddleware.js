
const jwt = require("jsonwebtoken"); 
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try { 
    const headers_token = req.headers.authorization

    if(!headers_token){
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized user" });
    }

    const auth_token = headers_token.split(' ')[1]

    console.log(auth_token)

    const verify_token = jwt.verify(auth_token, process.env.JWT_SECRET);

    if (!verify_token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized user" });
    }

    const user_id = verify_token.user_id;

    const find_user = await User.findById(user_id).select('-password');

    req.user = find_user;

    return next();

  } catch (error) {

    return res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

module.exports = { authMiddleware };