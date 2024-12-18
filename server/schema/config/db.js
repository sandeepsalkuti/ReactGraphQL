const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();
const MONGO_URI =
  "mongodb+srv://salkutisandeep222:sandeep111@react.xbvne.mongodb.net/?retryWrites=true&w=majority&appName=react";

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`mongodb connected: ${conn.connection.host}`);
};

module.exports = connectDB;
