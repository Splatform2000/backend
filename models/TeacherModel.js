const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Teacher schema
const TeacherSchema = new Schema({
  // Unique identifier for the user
  userID: {
    type: String,
  },
  // Teacher's personal information
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  // Password reset fields
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  // Employment details
  isStaff: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
  withdraw: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  email: {
    type: String,
  },
  physicalAddress: {
    type: String,
  },
  postalAddress: {
    type: String,
  },
  // Personal information
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  },
  nationality: {
    type: String,
  },
  religion: {
    type: String,
  },
  // Employment and financial information
  campusID: {
    type: String,
  },
  employmentDate: {
    type: Date,
    default: Date.now,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
    default: "teacher",
  },
  qualifications: {
    type: String,
  },
  years: {
    type: String,
  },
  bank: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  position: {
    type: String,
  },
  telephone: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  salary: {
    type: String,
  },
  allowance: {
    type: String,
  },
  ssnit: {
    type: Boolean,
    default: false,
  },
  taxNumber: {
    type: String,
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
  // Next of kin details
  nextOfKin: {
    relationship: String,
    occupation: String,
    name: String,
    email: String,
    mobile: String,
    address: String,
    lastName: String,
  },
  // Profile information
  profileUrl: {
    type: String,
  },
  // Creation date
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Teacher model
const Teacher = mongoose.model("Teacher", TeacherSchema, "accounts");

// Export the Teacher model
module.exports = Teacher;