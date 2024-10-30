const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Next of Kin schema
const NextofKinSchema = new Schema({
  // Name of the next of kin
  name: {
    type: String,
  },
  // Surname of the next of kin
  surname: {
    type: String,
  },
  // Address of the next of kin
  address: {
    type: String,
  },
  // Telephone number of the next of kin
  telephone: {
    type: String,
  },
  // Occupation of the next of kin
  occupation: {
    type: String,
  },
  // Relationship to the student
  relationship: {
    type: String,
  },
  // Gender of the next of kin
  gender: {
    type: String,
  },
  // Email of the next of kin
  email: {
    type: String,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Next of Kin model
const NextofKin = mongoose.model("NextofKin", NextofKinSchema);

// Export the Next of Kin model
module.exports = NextofKin;