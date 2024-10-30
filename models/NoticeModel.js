const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Notifications schema
const NotificationsSchema = new Schema({
  // Date of the notification
  date: {
    type: Date,
    default: Date.now,
  },
  // Title of the notification
  title: {
    type: String,
  },
  // Description of the notification
  description: {
    type: String,
  },
  // User who created the notification
  createdBy: {
    type: String,
  },
  // Recipients of the notification
  receiver: {
    type: [String], // Array of strings
    default: ["All"], // Default value as an array
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Notifications model
const Notifications = mongoose.model("Notifications", NotificationsSchema);

// Export the Notifications model
module.exports = Notifications;