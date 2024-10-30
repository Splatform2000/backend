const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Get the connection URL from environment variables
const connection_url = process.env.LOCAL_DB_CONNECT || process.env.DB_CONNECT;

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(connection_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;