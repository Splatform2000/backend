const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

// Define the Users schema
const UsersSchema = new Schema({
  // Username for the user
  username: {
    type: String,
    required: true,
  },
  
  // Password for the user
  password: {
    type: String,
    required: true,
  },
  
  // Type of user (e.g., admin, student, teacher)
  type: {
    type: String,
    required: true,
  },
  
  // Last login date
  lastlogin: {
    type: Date,
  },
  
  // User restrictions, if any
  restrictions: {
    type: Object,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Users model
const User = mongoose.model("User ", UsersSchema);

// Export the Users model
module.exports = User;