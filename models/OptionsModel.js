const mongoose = require("../config/mongodb");
const { Schema } = mongoose;

// Define the Options schema
const OptionsModel = new Schema({
  // Array of event types
  events: {
    type: [
      {
        type: String,
      },
    ],
  },
  // Date of the options model
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Options model
const Options = mongoose.model("optionsdata", OptionsModel);

// Export the Options model
module.exports = Options;
