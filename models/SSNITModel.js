const mongoose = require("mongoose");
const { Schema } = mongoose;

const SBASchema = new Schema({
  year: {
    type: String,
  },
  month: {
    type: String,
  },
  percentage: {
    type: Number,
  },
  teachers: {
    type: [
      {
        userID: String,
        name: String,
        SSNITNumber: String,
        position: String,
        salary: Number,
        contribution: Number,
        grade: String,
        interpretation: String,
      },
    ],
  },
}, { timestamps: true });

const SSNIT = mongoose.model("SSNIT", SBASchema); // Use a singular name for the model
module.exports = SSNIT;