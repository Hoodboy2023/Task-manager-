const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const userSchema =  new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "Please provide first name"],
        minlength: 3,
        maxlength: 20,
    },
    lastName: {
        type: String, 
        required: [true, "please provide last name"],
        minlength: 3,
        maxlength: 20,
    },

    emailAddress: {
        type: String,
        required: [true, "Please provide Email-address"],
        match: [/^(?=.{1,64}@.{1,255}$)(?=.{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide valid email-Address"],
        unique: true
    },

    password: {
        type: String, 
        required: [true, "please provide password"],
        minlength: 6.
    }

})

userSchema.pre("save", async function () {
    const salt =  await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT =  function (){
    return jwt.sign(
        {
          userID: this._id, firstName: this.firstName
        },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", userSchema)