import "./styles/Auth.css";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      {/* Soft bookshelf ambience */}
      <div className="auth-bg"></div>

      <div className="auth-card">
        <h1>Welcome to BookSphere</h1>
        <p>Your personal digital library sanctuary</p>

        <div className="auth-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
