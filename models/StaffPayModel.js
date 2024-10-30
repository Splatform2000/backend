const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

const BankingSchema = new Schema({
  useID: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: String,
  },
  bank: {
    type: String,
  },
  employeeSSF: {
    type: String,
  },
  transactions: {
    type: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
        allowance: String,
        grossIncome: String,
        deductions: String,
        tax: String,
        netSalary: String,
      },
    ],
  },
}, { timestamps: true });

const StaffPay = mongoose.model("StaffPay", BankingSchema); // Use a singular name for the model
module.exports = StaffPay;