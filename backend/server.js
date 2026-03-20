const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionRoutes = require("./routes/transactionRoutes");
const app = express();
const wishlistRoutes = require("./routes/wishlistRoutes");
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/wishlist", wishlistRoutes);
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/admin");
const bookRoutes = require("./routes/books");
const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/transactions", transactionRoutes);

// DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");

  // AUTOMATIC NOTIFICATION GENERATOR
  // Sweeps the database every 1 minute to generate due/overdue notifications.
  setInterval(() => {
    fetch("http://localhost:5000/api/notifications/trigger-checks", {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => console.log("Auto-Check:", data.message))
      .catch(err => console.log("Auto-Check Error:", err.message));
  }, 60000); // 60,000 ms = 1 minute
});