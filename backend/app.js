const express =  require('express');
require("dotenv").config()
require("express-async-errors")

const helmet = require("helmet")
const cors = require("cors")

const connectDB =  require("./db/connect")

const app = express()

const tasks = require("./routes/tasks");
const auth = require("./routes/auth")

app.use(express.static("./public"))

const authMiddleware =  require("./middleware/authentication")
const errorHandlerMiddleware = require("./middleware/errorHandler")
const notFound = require("./middleware/notFound")
const xssCleanMiddleware = require("./middleware/xssClean")

app.use(express.json())

app.use(helmet())
app.use(cors())
app.set("trust proxy", 1)

app.use("/api/v1/auth",xssCleanMiddleware, auth)
app.use("/api/v1/tasks",xssCleanMiddleware, authMiddleware, tasks)
app.use(errorHandlerMiddleware)
app.use(notFound )


const run = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(8000, () => {
        console.log("Server listening on port 8000...")
        })
    }
    catch(error) {
       console.log(error)
       process.exit(1)
    }
}

run()

