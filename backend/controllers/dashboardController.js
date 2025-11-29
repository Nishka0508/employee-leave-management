const Leave = require("../models/Leave");

exports.employeeDashboard = async (req, res) => {
  const stats = {
    totalRequests: await Leave.countDocuments({ userId: req.user.id }),
    approved: await Leave.countDocuments({ userId: req.user.id, status: "approved" }),
    pending: await Leave.countDocuments({ userId: req.user.id, status: "pending" }),
  };
  res.json(stats);
};

exports.managerDashboard = async (req, res) => {
  const stats = {
    pending: await Leave.countDocuments({ status: "pending" }),
    approved: await Leave.countDocuments({ status: "approved" }),
    total: await Leave.countDocuments(),
  };
  res.json(stats);
};
