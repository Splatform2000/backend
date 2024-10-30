const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

// Define the NonBill schema
const NonBillSchema = new Schema({
  // Student's name or ID
  student: {
    type: String,
  },
  // Term of the payment
  term: {
    type: String,
  },
  // Year of the payment
  year: {
    type: String,
  },
  // Amount of the payment
  amount: {
    type: String,
  },
  // Remarks regarding the payment
  remarks: {
    type: String,
  },
  // Type of payment (e.g., cash, cheque)
  paymentType: {
    type: String,
  },
  // Bank associated with the payment
  bank: {
    type: String,
  },
  // Cheque number (if applicable)
  cheque: {
    type: String,
  },
  // Date of the payment
  date: {
    type: String, // Consider changing to Date type for better handling
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the NonBill model
const NonBillPayment = mongoose.model("NonBillPayment", NonBillSchema); // Use a more descriptive name
module.exports = NonBillPayment;