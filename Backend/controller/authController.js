const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
// const sendEmail = require("../utils/sendEmail"); // optional

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(user._id);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password
// controllers/authController.js



exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Plain reset token (ye user ko bhejna hai)
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashed token DB me save karenge
    user.resetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetTokenExpire = Date.now() + 30 * 60 * 1000; // 30 mins
    await user.save();

    // Reset URL (frontend ko plain token bhejna hai)
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const message = `Click here to reset your password: ${resetUrl}`;

    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message,
    });

    res.status(200).json({ message: "Reset email sent successfully", resetUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Reset Password
// controllers/authController.js

exports.resetPassword = async (req, res) => {
  try {
    // User ke link se plain token mila
    const plainToken = req.params.token;

    // Plain token ko hash kar ke DB me check karenge
    const hashedToken = crypto.createHash("sha256").update(plainToken).digest("hex");

    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpire: { $gt: Date.now() }, // token expire na hua ho
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    // Password change karna
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;

    // Reset token ko clear kar dena
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
