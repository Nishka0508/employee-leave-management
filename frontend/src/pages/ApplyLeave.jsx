import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ApplyLeave = () => {
  const navigate = useNavigate();
  const [leaveType, setLeaveType] = useState("sick");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const apply = async () => {
    try {
      const totalDays =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

      await API.post("/api/leaves", {
        leaveType,
        startDate,
        endDate,
        reason,
        totalDays,
      });

      alert("Leave Applied!");
      navigate("/employee/dashboard");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Apply Leave</h1>

        <label>Leave Type</label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        >
          <option value="sick">Sick</option>
          <option value="casual">Casual</option>
          <option value="vacation">Vacation</option>
        </select>

        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        />

        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        />

        <label>Reason</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={{ width: "100%", padding: 10, height: 100, marginBottom: 20 }}
        />

        <button
          onClick={apply}
          style={{
            width: "100%",
            padding: 12,
            background: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ApplyLeave;
