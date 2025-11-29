const Leave = require("../models/Leave");
const User = require("../models/User");

// APPLY LEAVE
exports.applyLeave = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ USER:", req.user);

    // Make sure user exists in token
    const userId = req.user?._id || req.user?.id;
    if (!userId) {
      console.log("❌ No User ID found in token");
      return res.status(400).json({ message: "Invalid user token" });
    }

    const leave = await Leave.create({
      leaveType: req.body.leaveType,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalDays: req.body.totalDays,
      reason: req.body.reason,
      userId: userId,
    });

    res.json({ message: "Leave Applied", leave });

  } catch (error) {
    console.error("❌ APPLY LEAVE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET MY REQUESTS
exports.myRequests = async (req, res) => {
  try {
    const userId = req.user?._id || req.user?.id;
    const leaves = await Leave.find({ userId: userId });
    res.json(leaves);
  } catch (error) {
    console.error("❌ MY REQUESTS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// CANCEL LEAVE
exports.cancelLeave = async (req, res) => {
  try {
    await Leave.findByIdAndDelete(req.params.id);
    res.json({ message: "Leave cancelled" });
  } catch (error) {
    console.error("❌ CANCEL LEAVE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// LEAVE BALANCE
exports.balance = async (req, res) => {
  try {
    const userId = req.user?._id || req.user?.id;
    const user = await User.findById(userId);
    res.json(user.leaveBalance || 0);
  } catch (error) {
    console.error("❌ BALANCE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// MANAGER — ALL REQUESTS
exports.allRequests = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("userId");
    res.json(leaves);
  } catch (error) {
    console.error("❌ ALL REQUESTS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// MANAGER — PENDING REQUESTS
exports.pendingRequests = async (req, res) => {
  try {
    const leaves = await Leave.find({ status: "pending" }).populate("userId");
    res.json(leaves);
  } catch (error) {
    console.error("❌ PENDING REQUESTS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// APPROVE REQUEST
exports.approve = async (req, res) => {
  try {
    await Leave.findByIdAndUpdate(req.params.id, {
      status: "approved",
      managerComment: req.body.comment,
    });
    res.json({ message: "Leave approved" });
  } catch (error) {
    console.error("❌ APPROVE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// REJECT REQUEST
exports.reject = async (req, res) => {
  try {
    await Leave.findByIdAndUpdate(req.params.id, {
      status: "rejected",
      managerComment: req.body.comment,
    });
    res.json({ message: "Leave rejected" });
  } catch (error) {
    console.error("❌ REJECT ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
