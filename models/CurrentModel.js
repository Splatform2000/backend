const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the AcademicYear schema
const AcademicYearSchema = new Schema({
  // The current academic year
  currentYear: {
    type: String,
    required: true, // Optional: Set to required if you want to enforce this field
  },
  // The current term (e.g., "Fall", "Spring")
  currentTerm: {
    type: String,
    required: true, // Optional: Set to required if you want to enforce this field
  },
  // A code for the academic year, defaults to "admin"
  code: {
    type: String,
    default: "admin", // Default value
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the AcademicYear model
const AcademicYear = mongoose.model('AcademicYear', AcademicYearSchema);

// Export the AcademicYear model
module.exports = AcademicYear;
