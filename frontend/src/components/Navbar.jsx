import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Leave Management</h2>

      <div>
        <Link to="/employee/dashboard" style={{ marginRight: 20 }}>Dashboard</Link>
        <Link to="/employee/apply" style={{ marginRight: 20 }}>Apply Leave</Link>
        <Link to="/employee/requests" style={{ marginRight: 20 }}>My Requests</Link>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
