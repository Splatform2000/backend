const mongoose = require("mongoose");
const { Schema } = mongoose;

const SectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const Section = mongoose.model("Section", SectionSchema); // Use a singular model name
module.exports = Section;