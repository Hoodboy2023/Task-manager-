const CustomError = require("../errors/customError")

const errorHandler = (err,req,res,next) => {

    let statusCode = err.statusCode || 500
    let message = err.message || 'Internal Server Error'

    if (err.name === "ValidationError"){
        statusCode = 400
        message = Object.values(err.errors).map(e => e.message).join(", ")
    }

    if (err.code && err.code === 11000){
        console.log("here")
        message =  `Value in ${Object.keys(err.keyValue)} Field already exists`
        statusCode = 400
    }

    if (err.name === "CastError"){
        message = `Invalid value ${err.value} for ${err.path}` 
        statusCode = 400
    }

    if (err instanceof CustomError){
        statusCode = err.statusCode
        message = err.message
    }

    res.status(statusCode).json({error:{
        message
    }})

}

module.exports = errorHandler