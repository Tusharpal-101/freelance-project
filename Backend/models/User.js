// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },           // User ka naam
  email: { type: String, required: true, unique: true },  // User ka email (unique)
  password: { type: String, required: true },      // User ka password (hashed)
  resetToken: String,                              // Forgot password token
  resetTokenExpire: Date                           // Token expiry
}, { timestamps: true });                          // createdAt aur updatedAt automatically

module.exports = mongoose.model("User", userSchema);
