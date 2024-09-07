

const getTasks =  async (req, res) => {
    res.status(200).send("get all tasks")
}

const addTask = async (req, res) => {

    res.status(201).send("task created")
}

const deleteTask = async (req, res) => {
    res.status(204).send("task deleted")
}

const updateTask = async (req, res) => {
    res.status(200).send("task updated")
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
}