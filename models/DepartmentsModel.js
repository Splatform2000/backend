const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Department schema
const DepartmentSchema = new Schema({
  // Name of the department
  name: {
    type: String,
    required: true, // Optional: Specify if the name is required
  },
  // Description of the department
  description: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Department model
const Department = mongoose.model("Department", DepartmentSchema); // Use singular name

// Export the Department model
module.exports = Department;