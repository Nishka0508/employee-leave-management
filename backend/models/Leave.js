const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  leaveType: { type: String, enum: ["sick", "casual", "vacation"] },
  startDate: String,
  endDate: String,
  totalDays: Number,
  reason: String,
  status: { type: String, default: "pending" },
  managerComment: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Leave", leaveSchema);
