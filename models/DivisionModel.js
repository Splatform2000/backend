const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Division schema
const DivisionSchema = new Schema({
  // Name of the division
  name: {
    type: String,
    required: true, // Optional: Add this if you want to make the name required
  },
  // Description of the division
  description: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Division model
const Division = mongoose.model("Division", DivisionSchema); // Use a singular name for the model

// Export the Division model
module.exports = Division;