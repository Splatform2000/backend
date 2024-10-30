const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Prefects schema
const PrefectsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  userID: {
    type: String,
  },
  startYear: {
    type: String,
  },
  endYear: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Prefects model
const Prefects = mongoose.model("Prefects", PrefectsSchema);

// Export the Prefects model
module.exports = Prefects;