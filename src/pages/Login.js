import "./styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");

  // 🔐 Prevent login page if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedRole = localStorage.getItem("role");

    if (isLoggedIn === "true") {
      if (savedRole === "Student") {
        navigate("/student-dashboard", { replace: true });
      } else if (savedRole === "Librarian") {
        navigate("/librarian-dashboard", { replace: true });
      } else if (savedRole === "Admin") {
        navigate("/admin-dashboard", { replace: true });
      }
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setError("");

      const res = await api.post("/auth/login", {
        email,
        password,
        role
      });

      const { _id, name, role: userRole } = res.data;

      // 🔥 Save login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", _id);
      localStorage.setItem("userName", name);
      localStorage.setItem("role", userRole);

      // 🔁 Redirect
      if (userRole === "Student") {
        navigate("/student-dashboard", { replace: true });
      } else if (userRole === "Librarian") {
        navigate("/librarian-dashboard", { replace: true });
      } else if (userRole === "Admin") {
        navigate("/admin-dashboard", { replace: true });
      }

    } catch (err) {
      setError(err.response?.data?.message || "Invalid login credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="University Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Student</option>
          <option>Librarian</option>
          <option>Admin</option>
        </select>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "20px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Don't have an account? <Link to="/register" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: "600" }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;