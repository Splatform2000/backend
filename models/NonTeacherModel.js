const mongoose = require("../config/mongodb");
const { Schema } = mongoose;

// Define the NonTeacher schema
const NonTeacherSchema = new Schema({
  // First name of the non-teaching staff
  name: {
    type: String,
    required: true,
  },
  // Surname of the non-teaching staff
  surname: {
    type: String,
    required: true,
  },
  // Email address of the non-teaching staff
  email: {
    type: String,
  },
  // Address of the non-teaching staff
  address: {
    type: String,
  },
  // Class associated with the non-teaching staff
  class: {
    type: String,
  },
  // Role of the staff member
  role: {
    type: String,
    default: "nonteacher",
  },
  // Telephone number of the non-teaching staff
  telephone: {
    type: String,
  },
  // Position of the staff member
  position: {
    type: String,
    required: true,
  },
  // Password for the non-teaching staff
  password: {
    type: String,
    required: true,
  },
  // Next of kin ID
  nextofKin_ID: {
    type: String,
  },
  // Gender of the non-teaching staff
  gender: {
    type: String,
    required: true,
  },
  // Profile picture URL
  profileUrl: {
    type: String,
  },
  // User ID
  userID: {
    type: String,
  },
  // Date of creation
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the NonTeacher model
const NonTeacher = mongoose.model("nonTeachers", NonTeacherSchema, "accounts");

// Export the NonTeacher model
module.exports = NonTeacher;
