const mongoose = require("mongoose");
const fs = require("fs");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem");

async function findMissing() {
  try {
    const books = await Book.find({
      $or: [
        { about: { $exists: false } },
        { about: "" },
        { authorInfo: { $exists: false } },
        { authorInfo: "" }
      ]
    });
    
    fs.writeFileSync("missing_books.json", JSON.stringify(books.map(b => b.title), null, 2));
    console.log("Wrote missing books to missing_books.json");
    
    mongoose.connection.close();
  } catch (err) {
    console.log("Error:", err);
    mongoose.connection.close();
  }
}

findMissing();
