const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const Transaction = require("../models/Transaction");

// GET ALL NOTIFICATIONS FOR A USER
router.get("/user/:id", async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.id })
      .sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MARK NOTIFICATION AS READ
router.put("/mark-read/:id", async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// TRIGGER SYSTEM TO CHECK FOR DUE / OVERDUE BOOKS
router.post("/trigger-checks", async (req, res) => {
  try {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Find all active transactions
    const activeTransactions = await Transaction.find({ status: "issued" }).populate("book");

    let notificationsCreated = 0;

    for (let t of activeTransactions) {
      if (!t.dueDate) continue;

      const due = new Date(t.dueDate);
      due.setHours(0, 0, 0, 0);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      
      const toms = new Date(now);
      toms.setDate(toms.getDate() + 1);

      // Check Overdue
      if (due < now) {
        // Send overdue notification if one doesn't already exist for this book recently
        const exists = await Notification.findOne({
          user: t.student,
          type: "overdue",
          message: { $regex: t.book.title }
        });

        if (!exists) {
          await Notification.create({
            user: t.student,
            message: `OVERDUE: Your borrowed book "${t.book.title}" was due on ${due.toLocaleDateString()}. Please return it ASAP to avoid further fines.`,
            type: "overdue"
          });
          notificationsCreated++;
        }
      } 
      // Check Due Tomorrow
      else if (due.getTime() === toms.getTime()) {
        const exists = await Notification.findOne({
          user: t.student,
          type: "due_reminder",
          message: { $regex: t.book.title }
        });

        if (!exists) {
          await Notification.create({
            user: t.student,
            message: `REMINDER: Your borrowed book "${t.book.title}" is due tomorrow (${due.toLocaleDateString()}).`,
            type: "due_reminder"
          });
          notificationsCreated++;
        }
      }
    }

    res.json({ message: `Check complete. ${notificationsCreated} new notifications generated.` });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE SYSTEM UPDATE ALERTS
router.post("/system-update", async (req, res) => {
    try {
        const { message, users } = req.body; // users should be an array of ObjectIds

        if (!users || !users.length) {
            return res.status(400).json({ message: "No users provided" });
        }

        const notifications = users.map(userId => ({
            user: userId,
            message: message,
            type: "system"
        }));

        await Notification.insertMany(notifications);
        res.json({ message: `System update sent to ${users.length} users`});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
