const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScholarshipsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  types: {
    type: Object,
  },
}, { timestamps: true });

const Scholarships = mongoose.model("Scholarships", ScholarshipsSchema); // Use a singular model name
module.exports = Scholarships;