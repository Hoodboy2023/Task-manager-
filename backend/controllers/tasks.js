const Task =  require("../models/task")
const User =  require("../models/user")

const getTasks =  async (req, res) => {
   const userID = req.user.userID
   const userTasks = await Task.find({createdBy: userID}).sort(createdAt)
   req.status(200).json({userTasks, count: userTasks.length })
}

const getTask = async (req,res) =>{
    const {
        user: {userID},
        params: {id}
    } = req

    const task = await User.findOne({
        _id: id,
        createdBy: userID
    })

    res.status(200).json(task)
}

const addTask = async (req, res) => {
    req.body.createdBy = req.user.userID
    const task = await Task.create({...req.body})

    res.status(201).send("task created")
}

const deleteTask = async (req, res) => {
    const {
        user: {userID},
        params: {id}
    } = req
    const task = await User.findOneAndDelete({
        _id: id,
        createdBy: userID
    })
    res.status(200).send()
}

const updateTask = async (req, res) => {
    const {
        user: {userID},
        body: {title, description, category, completed},
        params: {id}
    } = req

    if (title === "" || description === "" || category === "" || completed === ""){
        throw new Error("One of the Fields is empty")
    }

    const task = await User.findOneAndUpdate(
        {_id: id, createBy: userID}, 
        {title, description, category, completed},
        {
            new: true,
            runValidators: true
        }
    )

    if (!task){
        throw new Error("Task does not exist")
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
    getTask,
}