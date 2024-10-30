const mongoose = require("mongoose");

// Define the Campus Schema
const campusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Export the Campus model
module.exports = mongoose.model("Campus", campusSchema);
