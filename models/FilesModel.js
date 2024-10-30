const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Files schema
const FilesSchema = new Schema({
  // Topic of the file
  topic: {
    type: String,
  },
  // Date of the file upload
  date: {
    type: Date,
    default: Date.now,
  },
  // Notes associated with the file
  notes: {
    type: String,
  },
  // ID of the course
  courseID: {
    type: String,
  },
  // ID of the class
  classID: {
    type: String,
  },
  // ID of the sender
  senderID: {
    type: String,
  },
  // File URL or path
  file: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Files model
const Files = mongoose.model("Files", FilesSchema);

// Export the Files model
module.exports = Files;