const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Dormitories schema
const DormitoriesSchema = new Schema({
  // Name of the dormitory
  name: {
    type: String,
    required: true,
  },
  // Campus associated with the dormitory
  campus: {
    type: String,
  },
  // Description of the dormitory
  description: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Dormitories model
const Dormitory = mongoose.model("Dormitory", DormitoriesSchema);

// Export the Dormitory model
module.exports = Dormitory;