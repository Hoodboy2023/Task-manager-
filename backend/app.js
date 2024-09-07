const express =  require('express');
require("dotenv").config()
const connectDB =  require("./db/connect")

const app = express()

const tasks = require("./routes/routes");

app.use(express.static("./public"))
app.use("/api/v1/tasks", tasks)


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


