import { useState } from "react";
import API from "../api";
import { useStore } from "../store";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const res = await API.post("/api/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      if (res.data.user.role === "employee") {
        navigate("/employee/dashboard");
      } else {
        navigate("/manager/dashboard");
      }
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>

      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>

      <button onClick={loginHandler}>Login</button>

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
