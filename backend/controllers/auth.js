const User =  require("../models/user")
const CustomError = require("../errors/customError")

const register = async (req, res) =>{
     const user = await User.create({...req.body})
     const token =  user.createJWT()
     
     res.status(201).json({firstName: user.firstName, token })
}

const login = async (req,res) => {

  const {emailAddress, password} = req.body
  if (!emailAddress || !password){
    throw new CustomError("Missing credentials")
  }

  const user = await User.findOne({emailAddress})

  if (!user){
    throw new CustomError("Invalid emailAddress")
  }

  const isPasswordValid =  user.comparePassword(password)

  if (isPasswordValid === false){
    throw new CustomError("Invalid credentials")
  }

  const token = user.createJWT()

  res.status(200).json({firstname: user.firstName, token})
    
 
}


module.exports = {login, register }