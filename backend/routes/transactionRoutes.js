const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const Book = require("../models/Book");

/* ===============================
   BORROW BOOK
================================= */
router.post("/borrow", async (req, res) => {
  try {
    const { studentId, bookId } = req.body;

    const book = await Book.findById(bookId);
    if (!book || !book.available) {
      return res.status(400).json({ message: "Book not available" });
    }

    const due = new Date();
    due.setDate(due.getDate() + 7); // 7 days issue

    const transaction = new Transaction({
      student: studentId,
      book: bookId,
      dueDate: due
    });

    await transaction.save();

    book.available = false;
    await book.save();

    res.status(200).json({ message: "Book borrowed successfully", transaction });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ===============================
   RETURN BOOK
================================= */
router.post("/return", async (req, res) => {
  try {
    console.log("PAYLOAD RECEIVED FOR RETURN:", req.body);
    const { transactionId } = req.body;

    const transaction = await Transaction.findById(transactionId).populate("book");
    if (!transaction || transaction.status === "returned") {
      return res.status(400).json({ message: "Invalid transaction" });
    }

    const today = new Date();
    let fine = 0;

    if (today > transaction.dueDate) {
      const diff = Math.ceil((today - transaction.dueDate) / (1000 * 60 * 60 * 24));
      fine = diff * 5; // ₹5 per day fine
    }

    transaction.returnDate = today;
    transaction.status = "returned";
    transaction.fine = fine;
    await transaction.save();

    // In case the book was deleted from the database while the student had it borrowed
    if (transaction.book) {
      transaction.book.available = true;
      await transaction.book.save();
    }

    res.status(200).json({ message: "Book returned", fine });

  } catch (err) {
    console.log("Error returning book:", err);
    res.status(500).json({ message: err.message, stack: err.stack });
  }
});

/* ===============================
   GET STUDENT HISTORY
================================= */
router.get("/student/:id", async (req, res) => {
  try {
    const transactions = await Transaction.find({ student: req.params.id })
      .populate("book")
      .sort({ issueDate: -1 });

    res.json(transactions);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ===============================
   GET TRANSACTION STATS
================================= */
router.get("/stats", async (req, res) => {
  try {
    const totalBorrowed = await Transaction.countDocuments();
    const totalReturned = await Transaction.countDocuments({ status: "returned" });

    res.json({
      totalBorrowed,
      totalReturned
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;