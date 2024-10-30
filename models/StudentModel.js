const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Student schema
const StudentSchema = new Schema({
  // Unique identifier for the user
  userID: {
    type: String,
    required: true,
  },
  // Reset password token and expiry
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  
  // Student's personal information
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  nationality: {
    type: String,
  },
  religion: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  },
  email: {
    type: String,
  },
  middleName: {
    type: String,
  },
  
  // Contact information
  physicalAddress: {
    type: String,
  },
  postalAddress: {
    type: String,
  },
  telephone: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },

  // Dormitory and class details
  dormitoryID: {
    type: String,
  },
  classID: {
    type: String,
  },
  campusID: {
    type: String,
  },
  
  // Student details
  gender: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "student",
  },
  status: {
    type: String,
  },
  fees: {
    type: String,
  },
  scholarship: {
    type: String,
  },
  grade: {
    type: String,
  },
  
  // Guardian details
  guardian: [{
    id: String,
    relationship: String,
    occupation: String,
    name: String,
    email: String,
    mobile: String,
    address: String,
    lastName: String,
  }],
  
  // Academic history and login
  lastSchool: {
    school: String,
    reason: String,
  },
  lastLogin: {
    type: Date,
  },
  
  // Health information
  health: {
    type: String,
  },
  disease: {
    type: String,
  },
  allege: {
    type: String,
  },
  
  // Miscellaneous fields
  section: {
    type: String,
  },
  division: {
    type: String,
  },
  
  // Withdrawal information
  withdraw: {
    type: Boolean,
    default: false,
  },
  withdrawDate: {
    type: Date,
  },

  // Password and creation date
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
  // Past status tracking
  past: {
    status: {
      type: Boolean,
      default: false,
    },
    date: Date,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Student model
const Student = mongoose.model('Student', StudentSchema, 'accounts');

// Export the Student model
module.exports = Student;
