const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Task schema
const TaskSchema = new Schema({
  // Teacher's unique identifier
  teacherID: {
    type: String,
    required: true,
  },
  // Course and class identifiers
  courseID: {
    type: String,
    required: true,
  },
  classID: {
    type: String,
    required: true,
  },
  // Score related to the task
  score: {
    type: String,
    required: true,
  },
  // Task data
  taskData: {
    type: String,
    required: true,
  },
  // Creation date of the task
  date: {
    type: Date,
    default: Date.now,
  },
  // Deadline for the task
  deadline: {
    type: Date,
    required: true,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Task model
const Task = mongoose.model("Task", TaskSchema, "tasks");

// Export the Task model
module.exports = Task;