const mongoose = require("mongoose"); // Ensure this path is correct
const { Schema } = mongoose;

const SBASchema = new Schema({
  class: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  academicYear: {
    type: String,
  },
  term: {
    type: String,
  },
  exam: {
    type: Number,
  },
  examPercentage: {
    type: Number,
  },
  classWork: {
    type: Number,
  },
  classWorkPercentage: {
    type: Number,
  },
  students: {
    type: [
      {
        userID: String,
        name: String,
        position: String,
        examPercentage: Number,
        exam: Number,
        classWork: Number,
        classWorkPercentage: Number,
        total: Number,
      },
    ],
  },
}, { timestamps: true });

const SBA = mongoose.model("SBA", SBASchema); // Use a singular name for the model
module.exports = SBA;