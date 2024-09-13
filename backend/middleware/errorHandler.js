const CustomError = require("../errors/customError")

const errorHandler = (err,req,res,next) => {

    let statusCode = err.statusCode || 500
    let message = err.message || 'Internal Server Error'

    if (err.name === "ValidationError"){
        statusCode = 400
        message = object.values(err.error).map(e => e.message).join(", ")
    }

    if (err.code && err.code === 11000){
        message =  `Unique Field violation by ${object.keys(err.keyValue)} Field, choose another value`
        statusCode = 400
    }

    if (err.name === "CastError"){
        message = `Invalid value ${err.value} for ${err.path}` 
        statusCode = 400
    }

    if (err instanceof customError){
        statusCode = err.statusCode
        message = err.message
    }

    res.status(statusCode).json({error:{
        message
    }})

}

module.exports = errorHandler