const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  applyLeave,
  myRequests,
  cancelLeave,
  balance,
  allRequests,
  pendingRequests,
  approve,
  reject
} = require("../controllers/leaveController");

// EMPLOYEE
router.post("/", auth, applyLeave);
router.get("/my-requests", auth, myRequests);
router.delete("/:id", auth, cancelLeave);
router.get("/balance", auth, balance);

// MANAGER
router.get("/all", auth, allRequests);
router.get("/pending", auth, pendingRequests);
router.put("/:id/approve", auth, approve);
router.put("/:id/reject", auth, reject);

module.exports = router;
