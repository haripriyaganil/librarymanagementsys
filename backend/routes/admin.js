const express = require("express");
const User = require("../models/User");
const Book = require("../models/Book");
const router = express.Router();

/* GET ALL STUDENTS */
router.get("/students", async (req, res) => {
  try {
    const students = await User.find({ role: "Student" });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/students", async (req, res) => {
  try {
    const students = await User.find({ role: "Student" });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/students/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// GET all librarians
router.get("/librarians", async (req, res) => {
  try {
    const librarians = await User.find({ role: "Librarian" });
    res.json(librarians);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/librarians/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Librarian deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/reports", async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "Student" });
    const totalLibrarians = await User.countDocuments({ role: "Librarian" });
    const totalBooks = await Book.countDocuments();

    const booksByGenre = await Book.aggregate([
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      totalStudents,
      totalLibrarians,
      totalBooks,
      booksByGenre
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;