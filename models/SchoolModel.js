const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchoolSchema = new Schema({
  name: {
    type: String,
  },
  fullName: {
    type: String,
  },
  motto: {
    type: String,
  },
  role: {
    type: String,
  },
  userID: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  logo: String,
  address: String,
  photoUrl: String,
  email: String,
  telephone: String,
  password: String,
}, { timestamps: true });

const School = mongoose.model("School", SchoolSchema, "accounts");
module.exports = School;