const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the YearGroup schema
const YearGroupSchema = new Schema({
  // Name of the year group
  name: {
    type: String,
    required: true,
  },
  // Code for the year group
  code: {
    type: String,
    required: true,
  },
  // Year associated with the year group
  year: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the YearGroup model
const YearGroup = mongoose.model("YearGroup", YearGroupSchema);

// Export the YearGroup model
module.exports = YearGroup;