const express =  require('express');
require("dotenv").config()
const connectDB =  require("./db/connect")

const app = express()

const tasks = require("./routes/tasks");
const auth = require("./routes/auth")

app.use(express.static("./public"))

const authMiddleware =  require("./middleware/authentication")
const errorHandlerMiddleware = require("./middleware/errorHandler")

app.use("/api/v1/auth", auth)
app.use("/api/v1/tasks",authMiddleware, tasks)
app.use(errorHandlerMiddleware)


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

