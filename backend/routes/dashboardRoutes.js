const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  employeeDashboard,
  managerDashboard
} = require("../controllers/dashboardController");

router.get("/employee", auth, employeeDashboard);
router.get("/manager", auth, managerDashboard);

module.exports = router;
