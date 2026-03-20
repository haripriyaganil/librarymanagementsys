import { useNavigate, useLocation } from "react-router-dom";
import "./styles/Dashboard.css";
import { useEffect } from "react";




function StudentDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
  const role = localStorage.getItem("role");

  if (!role) {
    navigate("/login", { replace: true });
  }
}, [navigate]);
  const location = useLocation();
  const name = location.state?.name || "Student";

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Welcome, {name}</h1>

      <div className="dashboard-center">
        <div className="dash-card" onClick={() => navigate("/books")}>
          <i class="bi bi-search"></i> Browse Books
        </div>

        <div className="dash-card" onClick={() => navigate("/mybooks")}>
          <i class="bi bi-book"></i> My Borrowed Books
        </div>


        <div
  className="dash-card"
  onClick={() => navigate("/history")}
>
  <i class="bi bi-clock-history"></i> History by Category
</div>


        <div className="dash-card" onClick={() => navigate("/wishlist")}>
  <i class="bi bi-suit-heart-fill"></i> Wishlist
</div>
        <div className="dash-card" onClick={() => navigate("/fines")}>
          <i class="bi bi-piggy-bank"></i> My Fines
        </div>
        <div className="dash-card" onClick={() => navigate("/notifications")}>
          <i class="bi bi-bell"></i> Notifications
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
