const cutsomError =  require("../errors/customError")

const errorHandler = (err,req,res,next) => {

    let statusCode = err.statusCode || 500
    let message = err.message || 'Internal Server Error'

    if (err.name === "ValidationError"){
        
    }

}