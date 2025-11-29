import { useEffect, useState } from "react";
import API from "../api";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [actionType, setActionType] = useState(""); // approve/reject
  const [comment, setComment] = useState("");

  const loadData = async () => {
    try {
      const res = await API.get("/api/leaves/pending");
      setRequests(res.data);
    } catch (err) {
      console.error("PENDING REQUESTS ERROR:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async () => {
    try {
      if (actionType === "approve") {
        await API.put(`/api/leaves/${selectedId}/approve`, { comment });
      } else {
        await API.put(`/api/leaves/${selectedId}/reject`, { comment });
      }

      alert("Updated Successfully!");
      setComment("");
      setSelectedId(null);
      loadData();
    } catch (error) {
      alert("Error updating request.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7ff",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "650px",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Pending Leave Requests
        </h2>

        {requests.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>
            No pending requests.
          </p>
        ) : (
          requests.map((req) => (
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
              <p><b>Type:</b> {req.leaveType}</p>
              <p><b>From:</b> {req.startDate}</p>
              <p><b>To:</b> {req.endDate}</p>

              {/* Buttons */}
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button
                  style={{
                    flex: 1,
                    background: "#28a745",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    setSelectedId(req._id);
                    setActionType("approve");
                  }}
                >
                  ✓ Approve
                </button>

                <button
                  style={{
                    flex: 1,
                    background: "#dc3545",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    setSelectedId(req._id);
                    setActionType("reject");
                  }}
                >
                  ✗ Reject
                </button>
              </div>
            </div>
          ))
        )}

        {/* POPUP */}
        {selectedId && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                width: "350px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                {actionType === "approve" ? "Approve Request" : "Reject Request"}
              </h3>

              <label>Comment (optional)</label>
              <textarea
                style={{
                  width: "100%",
                  height: "80px",
                  marginTop: "5px",
                  padding: "8px",
                }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    background: "#6c757d",
                    color: "white",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "6px",
                  }}
                  onClick={() => setSelectedId(null)}
                >
                  Cancel
                </button>

                <button
                  style={{
                    background:
                      actionType === "approve" ? "#28a745" : "#dc3545",
                    color: "white",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "6px",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingRequests;

