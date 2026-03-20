import "./styles/Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setError("");

      if (password !== confirmPassword) {
        return setError("Passwords do not match");
      }

      const data = {
        name,
        email,
        password,
        role
      };

      await api.post("/auth/register", data);

      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Create Account</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Student</option>
          <option>Librarian</option>
          <option>Admin</option>
        </select>

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <p style={{ marginTop: "20px", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Already have an account? <Link to="/login" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: "600" }}>Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;