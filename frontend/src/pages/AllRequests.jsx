import { useEffect, useState } from "react";
import API from "../api";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    rejected: 0,
    pending: 0,
  });

  const loadData = async () => {
    try {
      const res = await API.get("/api/leaves/all"); // ⭐ MANAGER ENDPOINT
      setRequests(res.data);

      // Calculate stats
      const approved = res.data.filter(r => r.status === "approved").length;
      const rejected = res.data.filter(r => r.status === "rejected").length;
      const pending = res.data.filter(r => r.status === "pending").length;

      setStats({
        total: res.data.length,
        approved,
        rejected,
        pending,
      });

    } catch (err) {
      console.error("ALL REQUESTS ERROR:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const getStatusColor = (status) => {
    if (status === "approved") return { color: "#16a34a", fontWeight: "bold" };
    if (status === "rejected") return { color: "#dc2626", fontWeight: "bold" };
    return { color: "#eab308", fontWeight: "bold" };
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7ff",
      padding: "30px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        width: "700px",
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          All Leave Requests
        </h2>

        {/* ⭐ Summary Cards */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}>
          <div className="card">
            <b>Total</b>
            <p>{stats.total}</p>
          </div>
          <div className="card">
            <b style={{ color: "#16a34a" }}>Approved</b>
            <p>{stats.approved}</p>
          </div>
          <div className="card">
            <b style={{ color: "#eab308" }}>Pending</b>
            <p>{stats.pending}</p>
          </div>
          <div className="card">
            <b style={{ color: "#dc2626" }}>Rejected</b>
            <p>{stats.rejected}</p>
          </div>
        </div>

        {/* ⭐ List of Requests */}
        {requests.map((req) => (
          <div
            key={req._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <p><b>Employee:</b> {req.userId?.name}</p>
            <p><b>Leave:</b> {req.leaveType}</p>
            <p><b>From:</b> {req.startDate}</p>
            <p><b>To:</b> {req.endDate}</p>
            <p><b>Total Days:</b> {req.totalDays}</p>

            <p>
              <b>Status:</b>{" "}
              <span style={getStatusColor(req.status)}>
                {req.status}
              </span>
            </p>

            {req.managerComment && (
              <p><b>Comment:</b> {req.managerComment}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRequests;

