const mongoose = require("../config/mongodb");
const { Schema } = mongoose;

// Define the Notifications schema
const NotificationsSchema = new Schema({
  // Date of the notification
  date: {
    type: Date,
    default: Date.now,
  },
  // Sender of the notification
  sender: {
    type: String,
  },
  // Status indicating if the message has been sent
  isSend: {
    type: Boolean,
    default: false,
  },
  // Identifier for the message
  messageID: {
    type: String,
  },
  // Receiver of the notification
  receiver: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Notifications model
const Notifications = mongoose.model("newMessage", NotificationsSchema);

// Export the Notifications model
module.exports = Notifications;
