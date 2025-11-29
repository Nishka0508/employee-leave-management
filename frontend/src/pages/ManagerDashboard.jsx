import { useState, useEffect } from "react";
import API from "../api";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const ManagerDashboard = () => {
  const logout = useStore((state) => state.logout);
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  const loadStats = async () => {
    try {
      const res = await API.get("/api/dashboard/manager"); 
      setStats(res.data);
    } catch (err) {
      console.error("MANAGER DASHBOARD ERROR:", err);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "#f5f7ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "480px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
          Manager Dashboard
        </h2>

        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "28px",
            color: "#444",
          }}
        >
          <p><b>Total Requests:</b> {stats.totalRequests}</p>
          <p><b>Approved:</b> {stats.approved}</p>
          <p><b>Pending:</b> {stats.pending}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button style={styles.btn} onClick={() => navigate("/manager/pending")}>
            Pending Requests
          </button>

          <button style={styles.btn} onClick={() => navigate("/manager/all")}>
            All Requests
          </button>

          <button
            style={{ ...styles.btn, background: "#ff5b5b" }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  btn: {
    background: "#4a42ec",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "0.25s",
  },
};

export default ManagerDashboard;


