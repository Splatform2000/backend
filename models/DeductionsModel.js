const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Deductions schema
const DeductionsSchema = new Schema({
  // Name of the deduction
  name: {
    type: String,
    required: true, // Optional: Specify if the name is required
  },
  // Amount of the deduction
  amount: {
    type: String,
    required: true, // Optional: Specify if the amount is required
  },
  // List of staff associated with the deduction
  staff: {
    type: [String], // It's better to specify the type of elements in the array
    default: [], // Default to an empty array
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Deductions model
const Deductions = mongoose.model("Deductions", DeductionsSchema); // Use a singular name

// Export the Deductions model
module.exports = Deductions;