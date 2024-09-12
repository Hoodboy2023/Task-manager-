const jwt = require("jsonwebtoken")

const auth =  async (req, res, next) => {
    const  authHeader =  req.header.authorization

    if (!authHeader || !authHeader.startswith("Bearer")){
        throw new Error("Authentication Failed")
    }

    const token =  authHeader.split(" ")[1]

    try{
       const payload = jwt.verify(token, process.env.JWT_SECRET)
       req.user =  {
          userID: payload.userID
       }
       next()

    } catch {
       throw new Error("Authentication Failed")
    }
}

module.exports = auth 