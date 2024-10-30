const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

const StoreitemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  unit: {
    type: String,
  },
  price: {
    type: Number,
  },
}, { timestamps: true });

const StoreItems = mongoose.model("StoreItems", StoreitemsSchema); // Use a singular name for the model
module.exports = StoreItems;