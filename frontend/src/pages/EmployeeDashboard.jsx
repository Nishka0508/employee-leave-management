import { useState, useEffect } from "react";
import API from "../api";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const logout = useStore((state) => state.logout);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  const loadStats = async () => {
  const res = await API.get("/api/dashboard/employee");   // FIXED PATH
  setStats(res.data);
};


  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Employee Dashboard</h2>

        <div>
          <a href="/employee/apply">Apply Leave</a>
          <a href="/employee/requests">My Requests</a>
          <a onClick={logout} style={{ cursor: "pointer" }}>Logout</a>
        </div>
      </div>

      {/* MAIN DASHBOARD CONTAINER */}
      <div className="container">
        <h2>Overview</h2>

        {/* CARDS */}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div className="card" style={{ flex: 1 }}>
            <h3>Total Requests</h3>
            <p style={{ fontSize: "26px", fontWeight: "700" }}>{stats.totalRequests}</p>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3>Approved</h3>
            <p style={{ fontSize: "26px", fontWeight: "700", color: "#28a745" }}>
              {stats.approved}
            </p>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3>Pending</h3>
            <p style={{ fontSize: "26px", fontWeight: "700", color: "#f0ad4e" }}>
              {stats.pending}
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ marginTop: "40px" }}>
          <button onClick={() => navigate("/employee/apply")}>Apply for Leave</button>
          <br /><br />
          <button onClick={() => navigate("/employee/requests")}>View My Requests</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
