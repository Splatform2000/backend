const mongoose = require("mongoose");

// Define the Activity Schema
const activitySchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true, // You can make it required if needed
    },
    user: {
        type: String,
        required: true, // You can make it required if needed
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Activity model
module.exports = mongoose.model("Activity", activitySchema);
