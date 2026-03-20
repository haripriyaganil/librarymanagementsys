const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const fs = require("fs");
const path = require("path");

function processCoverPath(coverInput) {
  if (!coverInput) return coverInput;
  if (coverInput.includes(':\\') || coverInput.startsWith('/Users/') || coverInput.includes('public/images') || coverInput.includes('public\\images')) {
      const filename = path.basename(coverInput.replace(/\\/g, '/'));
      const targetRelativePath = `/images/covers/${filename}`;
      const targetAbsolutePath = path.join(__dirname, '../../public/images/covers', filename);
      try {
          if (fs.existsSync(coverInput) && path.resolve(coverInput) !== path.resolve(targetAbsolutePath)) {
              // Ensure directory exists
              const dir = path.dirname(targetAbsolutePath);
              if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true });
              }
              fs.copyFileSync(coverInput, targetAbsolutePath);
              console.log(`Copied local file to ${targetAbsolutePath}`);
          }
      } catch (e) {
          console.error(`Failed to handle local file: ${e.message}`);
      }
      return targetRelativePath;
  }
  return coverInput;
}

// 🔥 GET books (optionally by category)
router.get("/", async (req, res) => {
  try {
    const { genre } = req.query;
    console.log("Genre from frontend:", genre);

    const books = genre
      ? await Book.find({
          genre: { $regex: new RegExp(genre, "i") }
        })
      : await Book.find();

    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// 🔥 ADD book
router.post("/add", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { title, author, cover, about, authorInfo, category } = req.body;

const newBook = new Book({
  title,
  author,
  cover: processCoverPath(cover),
  about,
  authorInfo,
  category,
  genre: req.body.genre || category
});

    console.log("SAVING BOOK:", newBook);


    await newBook.save();

    console.log("BOOK SAVED SUCCESSFULLY");

    res.status(201).json({ message: "Book added successfully" });

  } catch (err) {
    console.log("ADD ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});
// ================= GET BOOKS BY GENRE =================
router.get("/genre/:genre", async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.genre });

    res.json(books);

  } catch (err) {
    console.log("GET GENRE BOOKS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/summary/:genre", async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments({ genre: req.params.genre });

    res.json({
      genre: req.params.genre,
      totalBooks
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    console.log("Requested category:", category);

    const books = await Book.find({
      category: category
    });

    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// 🔥 UPDATE book (PUT)
router.put("/:id", async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (updateData.cover) {
      updateData.cover = processCoverPath(updateData.cover);
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// 🔥 DELETE book
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;