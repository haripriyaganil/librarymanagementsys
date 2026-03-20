const mongoose = require("mongoose");
const Book = require("./models/Book");

// 👇 THIS LINE — IMPORTANT (.default)
const booksData = require("../src/data/booksData").default;

mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem")
  .then(async () => {

    await Book.deleteMany(); // clear old books

    const allBooks = [];

    // 👇 KEEP THIS PART HERE
    Object.keys(booksData).forEach(category => {
      booksData[category].forEach(book => {
        allBooks.push({
          ...book,
          category
        });
      });
    });

    await Book.insertMany(allBooks);

    console.log("Books seeded successfully");
    process.exit();
  })
  .catch(err => console.log(err));