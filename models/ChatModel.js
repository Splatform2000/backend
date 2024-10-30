const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Chat schema
const ChatSchema = new Schema({
  // User ID of the chat participant
  userID: {
    type: String,
  },
  // Message content
  message: {
    type: String,
  },
  // Date of the message
  date: {
    type: Date,
    default: Date.now,
  },
  // Parent message ID (for threading)
  parent: {
    type: String,
  },
  // Status indicating if the message is viewed
  isViewed: {
    type: Boolean,
    default: false,
  },
  // Sender ID
  sender: {
    type: String,
  },
  // Requestor ID
  requestor_id: {
    type: String,
  },
  // Acceptor ID
  acceptor_id: {
    type: String,
  },
  // Array of messages in the chat
  messages: {
    type: [
      {
        senderID: String,
        message: String,
        channelID: String,
        role: String,
        isViewed: {
          type: Boolean,
          default: false,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Chat model
const Chat = mongoose.model("Chat", ChatSchema);

// Export the Chat model
module.exports = Chat;
