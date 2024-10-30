const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Correspondance schema
const CorrespondanceSchema = new Schema({
  // Address of the recipient
  address: {
    type: String,
    required: true,
  },
  // Salutation used in the correspondence
  salutation: {
    type: String,
  },
  // Subject of the correspondence
  subject: {
    type: String,
    required: true,
  },
  // Body of the correspondence
  body: {
    type: String,
  },
  // Closing statement
  closing: {
    type: String,
  },
  // Signature of the sender
  signature: {
    type: String,
  },
  // Date of creation
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Correspondance model
const Correspondance = mongoose.model("Correspondance", CorrespondanceSchema);

// Export the Correspondance model
module.exports = Correspondance;