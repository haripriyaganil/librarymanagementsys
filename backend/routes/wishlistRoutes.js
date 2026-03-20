const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");

// ADD TO WISHLIST
router.post("/add", async (req, res) => {
  try {
    const { studentId, bookId } = req.body;

    const exists = await Wishlist.findOne({ student: studentId, book: bookId });
    if (exists) {
      return res.json({ message: "Already wishlisted" });
    }

    const newWish = new Wishlist({
      student: studentId,
      book: bookId
    });

    await newWish.save();
    res.status(201).json({ message: "Wishlisted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET STUDENT WISHLIST
router.get("/student/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.find({ student: req.params.id })
      .populate("book");

    res.json(wishlist);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REMOVE FROM WISHLIST
router.post("/remove", async (req, res) => {
  try {
    const { studentId, bookId } = req.body;
    await Wishlist.findOneAndDelete({ student: studentId, book: bookId });
    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;