import "../pages/styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");


 const handleLogout = () => {
  localStorage.removeItem("role");
  navigate("/login", { replace: true });
};

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Book<span>Sphere</span>
      </div>

      <div className="nav-links">
        <Link to="/">Archive</Link>
        <Link to="/books">The Library</Link>

        {/* AUTH BUTTON */}
        {!role ? (
          <button className="enter-btn" onClick={() => navigate("/auth")}>
            Enter
          </button>
        ) : (
          <button className="enter-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
