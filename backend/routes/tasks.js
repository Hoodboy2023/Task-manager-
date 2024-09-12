const express = require("express")
const router = express.Router()

const {
  getTasks,
  updateTask,
  deleteTask,
  addTask, 
  getTask
} = require("../controllers/tasks")

router.route("/").post(addTask).get(getTasks)
router.route("/:id").delete(deleteTask).patch(updateTask).get(getTask)

module.exports = router