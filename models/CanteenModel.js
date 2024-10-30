const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Canteen schema
const CanteenSchema = new Schema({
  // Name of the canteen
  name: {
    type: String,
    required: true,
  },
  // Class ID associated with the canteen
  classID: {
    type: String,
  },
  // Member ID associated with the canteen
  memberID: {
    type: String,
  },
  // User ID associated with the canteen
  userID: {
    type: String,
    required: true,
  },
  // Role of the user
  role: {
    type: String,
  },
  // Payment method used
  paymentMethod: {
    type: String,
  },
  // Array of payment records
  payments: {
    type: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
        receipt: String,
        amount: String,
        covers: String,
      },
    ],
  },
  // Record creation date
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Canteen model
const Canteen = mongoose.model("Canteen", CanteenSchema);

// Export the Canteen model
module.exports = Canteen;
