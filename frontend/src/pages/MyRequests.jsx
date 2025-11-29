import { useEffect, useState } from "react";
import API from "../api";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const res = await API.get("/api/leaves/my-requests");  // ✅ FIXED PATH
      setRequests(res.data);
    } catch (err) {
      console.error("MY REQUESTS ERROR:", err);
      alert("Failed to load requests");
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div>
      <div className="navbar">
        <h2>My Leave Requests</h2>
      </div>

      <div className="container">
        {requests.length === 0 ? (
          <p>No leave requests found</p>
        ) : (
          requests.map((req) => (
            <div className="card" key={req._id}>
              <h3>{req.leaveType} Leave</h3>
              <p><b>From:</b> {new Date(req.startDate).toDateString()}</p>
              <p><b>To:</b> {new Date(req.endDate).toDateString()}</p>
              <p><b>Total Days:</b> {req.totalDays}</p>

              <p>
                <b>Status:</b>{" "}
                <span
                  className={
                    req.status === "approved"
                      ? "status-approved"
                      : req.status === "pending"
                      ? "status-pending"
                      : "status-rejected"
                  }
                >
                  {req.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyRequests;

