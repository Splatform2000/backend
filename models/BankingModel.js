const mongoose = require("mongoose");

// Define the Banking Schema
const bankingSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
    },
    accountName: {
        type: String,
    },
    transactions: [{
        date: {
            type: Date,
            default: Date.now,
        },
        description: String,
        payee: String,
        transactionNumber: String,
        credit: String,
        debit: String,
        type: String,
        bankAcc: String,
        issuedDate: {
            type: Date,
            default: Date.now,
        },
    }],
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Banking model
module.exports = mongoose.model("Banking", bankingSchema);
