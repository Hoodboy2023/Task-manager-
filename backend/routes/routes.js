const express = require("express")
const router = express.Router()

const {
  getTasks,
  updateTask,
  deleteTask,
  addTask

} = require("../controllers/tasks")

router.route("/").get(getTasks)
router.route("/add").get(addTask)

module.exports = router