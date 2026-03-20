const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const res = await Book.updateMany({}, { $set: { cover: "/images/covers/default-book.jpg" } });
  console.log("Updated books count:", res.modifiedCount || res.nModified);
  process.exit(0);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
