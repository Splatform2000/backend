const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Payrow schema
const PayrowSchema = new Schema({
  type: {
    type: String,
    default: "pay",
  },
  name: String,
  code: String,
  salary: String,
  allowance: String,
  bonus: String,
}, { timestamps: true });

// Create the Payrow model
const Payrow = mongoose.model("payrow", PayrowSchema);

// Export the Payrow model
module.exports = Payrow;