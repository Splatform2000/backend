const mongoose = require("mongoose");

// Define the Course Schema
const courseSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    classID: {
        type: String,
    },
    classes: [{
        teacher: {
            type: String,
        },
        class: {
            type: String,
        },
        _id: {
            type: String,
        },
    }],
    department: {
        type: String,
    },
    type: {
        type: String,
    },
    teacher: {
        type: String,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Course model
module.exports = mongoose.model("Course", courseSchema);