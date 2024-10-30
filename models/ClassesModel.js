const mongoose = require("mongoose"); // Import Mongoose directly
const { Schema } = mongoose;

// Define the Classes schema
const ClassesSchema = new Schema({
  // Name of the class
  name: {
    type: String,
    required: true,
  },
  // Teacher ID associated with the class
  teacherID: {
    type: String,
  },
  // Unique class code
  classCode: {
    type: String,
    required: true,
  },
  // Campus ID where the class is held
  campusID: {
    type: String,
  },
  // Division of the class
  division: {
    type: String,
  },
  // Academic year information
  academic: {
    type: String,
  },
  // Group information
  group: {
    type: String,
  },
  // Prefect assigned to the class
  prefect: {
    type: String,
  },
  // SBA (School Based Assessment) status
  sba: {
    type: Boolean,
  },
  // Staff responsible for SBA
  sbaStaff: {
    type: String,
  },
  // Date of creation
  date: {
    type: Date,
    default: Date.now,
  },
  // Status indicating if the class is past
  past: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Classes model
const Classes = mongoose.model("Classes", ClassesSchema);

// Export the Classes model
module.exports = Classes;