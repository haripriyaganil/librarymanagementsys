const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ================= LOGIN =================
// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // 1️⃣ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 2️⃣ Check password
   const isMatch = await bcrypt.compare(password, user.password);

console.log("Entered password:", password);
console.log("Stored hash:", user.password);
console.log("Password match result:", isMatch);

if (!isMatch) {
  return res.status(400).json({ message: "Invalid credentials" });
}

    // 3️⃣ Normalize role from frontend
    const formattedRole =
      role.charAt(0).toUpperCase() +
      role.slice(1).toLowerCase();
console.log("DB role:", user.role);
console.log("Frontend role:", role);
console.log("Formatted role:", formattedRole);
    // 4️⃣ Compare role exactly with DB
    if (user.role !== formattedRole) {
      return res.status(403).json({ message: "Role mismatch" });
    }

    // 5️⃣ Send response
    res.status(200).json({
      message: "Login successful",
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;