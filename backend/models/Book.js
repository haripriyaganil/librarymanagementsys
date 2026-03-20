const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  cover: String,
  about: String,
  authorInfo: String,
  available: { type: Boolean, default: true },
  totalCopies: { type: Number, default: 1 },
  availableCopies: { type: Number, default: 1 },
  genre: { type: String, default: "Uncategorized" },
  category: { type: String, default: "Uncategorized" }
});

module.exports = mongoose.model("Book", bookSchema);