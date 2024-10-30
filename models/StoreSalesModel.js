const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

const StoreSalesSchema = new Schema({
  name: {
    type: String,
    required: true, // Optional: Specify if the name is required
  },
  totalCost: {
    type: Number,
    required: true, // Optional: Specify if totalCost is required
  },
  amountPaid: {
    type: Number,
    required: true, // Optional: Specify if amountPaid is required
  },
  seller: {
    type: String,
    required: true, // Optional: Specify if seller is required
  },
  items: {
    type: [
      {
        name: {
          type: String,
        },
        qty: {
          type: Number,
        },
        rate: {
          type: Number,
        },
        amount: {
          type: Number,
        },
      },
    ],
  },
}, { timestamps: true });

const StoreSales = mongoose.model("StoreSales", StoreSalesSchema); // Use a singular name for the model
module.exports = StoreSales;