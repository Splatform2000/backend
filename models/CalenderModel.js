const mongoose = require("mongoose");

// Define the Calendar Schema
const calendarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    resource: {
        type: String,
    },
    description: {
        type: String,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    allDay: {
        type: Boolean,
    },
    day: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Calendar model using CommonJS syntax
module.exports = mongoose.model("Calendar", calendarSchema);