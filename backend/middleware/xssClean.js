const DOMPurify = require("dompurify")
const { JSDOM } = require("jsdom") 

const window = new JSDOM.windpw("")
const DOMPurifyInstance =  DOMPurify(window)

const xssClean = (req,res,next) => {
    if(req.body){
        for(let key in req.body){
            if (req.body.hasOwnProperty(key)){
                  req.body[key] = DOMPurifyInstance.sanitize(req.body[key])
            }
        }
    }

    if(req.params){
        for(let key in req.params){
            if (req.boby.hasOwnProperty(key)){
                req.body[key] = DOMPurifyInstance.sanitize(req.body[key])
            }
        }
    }

    next()
}

module.exports = xssClean