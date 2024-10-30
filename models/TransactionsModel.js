const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Transaction schema
const TransactionSchema = new Schema({
  // Amount of the transaction
  amount: {
    type: String,
    required: true,
  },
  
  // Transaction details
  category: {
    type: String,
  },
  type: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  chequeNumber: {
    type: String,
  },
  bank: {
    type: String,
  },
  description: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  term: {
    type: String,
  },
  
  // Payment details
  pay: {
    accountNumber: String,
    bank: String,
    userID: String,
    position: String,
    month: String,
    year: String,
    salary: String,
  },
  
  // Fees details
  fees: {
    userID: String,
    term: String,
    academicYear: String,
    applyTo: {
      all: {
        type: Boolean,
        default: false,
      },
      tuition: {
        type: Boolean,
        default: false,
      },
      examination: {
        type: Boolean,
        default: false,
      },
    },
  },
  
  // Transaction date
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Transaction model
const Transaction = mongoose.model("Transaction", TransactionSchema);

// Export the Transaction model
module.exports = Transaction;
