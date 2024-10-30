const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Fees schema
const FeesSchema = new Schema({
  // Name of the fee structure
  name: {
    type: String,
  },
  // Code for the fee structure
  code: {
    type: String,
  },
  // Term and year for the fees
  term: String,
  year: String,
  // Fees for day students
  day: {
    type: {
      name: {
        type: String,
        default: "day",
      },
      tuition: String,
      facility: String,
      maintenance: String,
      exam: String,
    },
  },
  // Fees for fresh day students
  freshDay: {
    type: {
      name: {
        type: String,
        default: "freshDay",
      },
      tuition: String,
      facility: String,
      maintenance: String,
      exam: String,
    },
  },
  // Fees for border students
  border: {
    type: {
      name: {
        type: String,
        default: "border",
      },
      tuition: String,
      facility: String,
      maintenance: String,
      exam: String,
    },
  },
  // Fees for fresh border students
  freshBorder: {
    type: {
      name: {
        type: String,
        default: "freshBorder",
      },
      tuition: String,
      facility: String,
      maintenance: String,
      exam: String,
    },
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Fees model
const Fees = mongoose.model("fees", FeesSchema);

// Export the Fees model
module.exports = Fees;
