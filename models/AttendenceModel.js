const mongoose = require("mongoose");

// Define the Attendance Schema
const attendanceSchema = new mongoose.Schema({
    classID: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: "User",
    },
    users: [{
        userID: {
            type: mongoose.Schema.Types.ObjectId, // Reference to User model
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    }],
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Attendance model
module.exports = mongoose.model("Attendance", attendanceSchema);
